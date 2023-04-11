import { Operations } from "./operations";
import { Services } from "./services";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://servicemanagement.googleapis.com/"];
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
 * Google Service Management allows service producers to publish their services on Google Cloud Platform so that they can be discovered and used by service consumers.
 *
 * @see {@link https://cloud.google.com/service-management/}
 */
export declare class SDK {
    operations: Operations;
    services: Services;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
