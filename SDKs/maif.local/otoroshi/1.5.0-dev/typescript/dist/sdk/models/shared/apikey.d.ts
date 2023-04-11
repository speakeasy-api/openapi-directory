import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
 */
export declare class ApiKey extends SpeakeasyBase {
    /**
     * The group/service ids (prefixed by group_ or service_ on which the key is authorized
     */
    authorizedEntities: string[];
    /**
     * The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
     */
    clientId: string;
    /**
     * The name of the api key, for humans ;-)
     */
    clientName: string;
    /**
     * The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
     */
    clientSecret: string;
    /**
     * Authorized number of calls per day
     */
    dailyQuota?: number;
    /**
     * Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
     */
    enabled: boolean;
    /**
     * Bunch of metadata for the key
     */
    metadata?: Record<string, string>;
    /**
     * Authorized number of calls per month
     */
    monthlyQuota?: number;
    /**
     * Authorized number of calls per second, measured on 10 seconds
     */
    throttlingQuota?: number;
}
