import { Groundhogs } from "./groundhogs";
import { Info } from "./info";
import { Predictions } from "./predictions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://virtserver.swaggerhub.com/pcraig3/groundhog-day-api/1.2.1", "https://groundhog-day.com"];
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
 * This API returns all of North America’s prognosticating animals and their yearly weather predictions.
 */
export declare class SDK {
    groundhogs: Groundhogs;
    info: Info;
    predictions: Predictions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
