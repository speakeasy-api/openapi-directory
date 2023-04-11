import { Apikeys } from "./apikeys";
import { AuthConfig } from "./authconfig";
import { Certificates } from "./certificates";
import { Configuration } from "./configuration";
import { DataExporterConfigs } from "./dataexporterconfigs";
import { Environments } from "./environments";
import { Groups } from "./groups";
import { Health } from "./health";
import { Import } from "./import";
import { JwtVerifiers } from "./jwtverifiers";
import { Scripts } from "./scripts";
import { Services } from "./services";
import { Snowmonkey } from "./snowmonkey";
import { Stats } from "./stats";
import { Templates } from "./templates";
import { ValidationAuthorities } from "./validationauthorities";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://otoroshi-api.oto.tools/", "http://maif.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Admin API of the Otoroshi reverse proxy
 *
 * @see {@link https://maif.github.io/otoroshi/} - Find out more about Otoroshi
 */
export declare class SDK {
    /**
     * Everything about Otoroshi api keys
     */
    apikeys: Apikeys;
    /**
     * Everything about Otoroshi global auth. module config
     */
    authConfig: AuthConfig;
    /**
     * Everything about Otoroshi SSL/TLS certificates
     */
    certificates: Certificates;
    /**
     * Everything about Otoroshi global configuration
     */
    configuration: Configuration;
    /**
     * Everything about Otoroshi data exporters
     */
    dataExporterConfigs: DataExporterConfigs;
    /**
     * Everything about Otoroshi Environments
     */
    environments: Environments;
    /**
     * Everything about Otoroshi service groups
     */
    groups: Groups;
    /**
     * Everything about Otoroshi health status
     */
    health: Health;
    /**
     * Everything about Otoroshi import/export
     */
    import: Import;
    /**
     * Everything about Otoroshi global JWT token verifiers
     */
    jwtVerifiers: JwtVerifiers;
    /**
     * Everything about Otoroshi request transformer scripts
     */
    scripts: Scripts;
    /**
     * Everything about Otoroshi service descriptors
     */
    services: Services;
    /**
     * Everything about Otoroshi Snow Monkey
     */
    snowmonkey: Snowmonkey;
    /**
     * Everything about Otoroshi stats
     */
    stats: Stats;
    /**
     * Everything about Otoroshi entities templates
     */
    templates: Templates;
    /**
     * Everything about Otoroshi validation authorities
     */
    validationAuthorities: ValidationAuthorities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
