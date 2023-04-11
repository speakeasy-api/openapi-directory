import { SpeakeasyBase } from "../../../internal/utils";
import { Auth0Config } from "./auth0config";
import { CleverSettings } from "./cleversettings";
import { ElasticConfig } from "./elasticconfig";
import { IpFiltering } from "./ipfiltering";
import { MailerSettings } from "./mailersettings";
import { Webhook } from "./webhook";
/**
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
 */
export declare class GlobalConfig extends SpeakeasyBase {
    /**
     * Email addresses that will receive all Otoroshi alert events
     */
    alertsEmails: string[];
    /**
     * Webhook that will receive all Otoroshi alert events
     */
    alertsWebhooks: Webhook[];
    /**
     * Webhook that will receive all internal Otoroshi events
     */
    analyticsWebhooks: Webhook[];
    /**
     * If enabled, Admin API won't be able to write/update/delete entities
     */
    apiReadOnly: boolean;
    /**
     * If not defined, every new service descriptor will be added to the default group
     */
    autoLinkToDefaultGroup: boolean;
    /**
     * Configuration for Auth0 domain
     */
    backofficeAuth0Config?: Auth0Config;
    /**
     * Configuration for CleverCloud client
     */
    cleverSettings?: CleverSettings;
    /**
     * The configuration for elastic access
     */
    elasticReadsConfig?: ElasticConfig;
    /**
     * Configs. for Elastic writes
     */
    elasticWritesConfigs?: ElasticConfig[];
    /**
     * IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros
     */
    endlessIpAddresses: string[];
    /**
     * The filtering configuration block for a service of globally.
     */
    ipFiltering: IpFiltering;
    /**
     * If enabled, Otoroshi will reject new request if too much at the same time
     */
    limitConcurrentRequests: boolean;
    /**
     * Possibles lines for Otoroshi
     */
    lines?: string[];
    /**
     * Configuration for mailgun api client
     */
    mailerSettings?: MailerSettings;
    /**
     * The number of authorized request processed at the same time
     */
    maxConcurrentRequests: number;
    /**
     * The max size in bytes of an HTTP 1.0 response
     */
    maxHttp10ResponseSize?: number;
    /**
     * Number of events kept locally
     */
    maxLogsSize?: number;
    /**
     * Use middle finger emoji as a response character for endless HTTP responses
     */
    middleFingers?: boolean;
    /**
     * Authorized number of calls per second globally per IP address, measured on 10 seconds
     */
    perIpThrottlingQuota: number;
    /**
     * Configuration for Auth0 domain
     */
    privateAppsAuth0Config?: Auth0Config;
    /**
     * HTTP will be streamed only. Doesn't work with old browsers
     */
    streamEntityOnly: boolean;
    /**
     * Authorized number of calls per second globally, measured on 10 seconds
     */
    throttlingQuota: number;
    /**
     * If enabled, login to backoffice through Auth0 will be disabled
     */
    u2fLoginOnly: boolean;
    /**
     * If enabled, services will be authorized to use circuit breakers
     */
    useCircuitBreakers: boolean;
}
