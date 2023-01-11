import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * playByPlay - Play By Play
    **/
    playByPlay(req: operations.PlayByPlayRequest, config?: AxiosRequestConfig): Promise<operations.PlayByPlayResponse>;
    /**
     * playByPlayDelta - Play By Play Delta
    **/
    playByPlayDelta(req: operations.PlayByPlayDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayByPlayDeltaResponse>;
}
