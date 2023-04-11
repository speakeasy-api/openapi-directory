import { Batch } from "./batch";
import { Batch1 } from "./batch1";
import { Business } from "./business";
import { Classifier } from "./classifier";
import { Consumer } from "./consumer";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.ntropy.network"];
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
 * Ntropy Transaction API for transaction classification & management
 *
 * @remarks
 *
 * Contact Support:
 *  Name: API Support
 *  Email: api@ntropy.network
 */
export declare class SDK {
    batch: Batch;
    batch1: Batch1;
    business: Business;
    classifier: Classifier;
    consumer: Consumer;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
