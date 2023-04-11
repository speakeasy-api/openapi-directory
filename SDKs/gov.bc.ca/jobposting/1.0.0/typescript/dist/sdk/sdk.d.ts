import { JobFeed } from "./jobfeed";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://workbcjobs.api.gov.bc.ca/v1"];
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
 * This API allows you to receive a feed of jobs from WorkBC's Job Board. Please see our <a href="https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice" target="_blank">data collection notice</a>. Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.
 */
export declare class SDK {
    jobFeed: JobFeed;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
