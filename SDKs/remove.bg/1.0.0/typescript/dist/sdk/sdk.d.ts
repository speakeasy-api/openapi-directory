import { BackgroundRemoval } from "./backgroundremoval";
import { FetchAccountInfo } from "./fetchaccountinfo";
import { ImprovementProgram } from "./improvementprogram";
import * as shared from "./models/shared";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.remove.bg/v1.0"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * Remove the background of any image
 */
export declare class SDK {
    backgroundRemoval: BackgroundRemoval;
    fetchAccountInfo: FetchAccountInfo;
    improvementProgram: ImprovementProgram;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
