import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { BackgroundRemoval } from "./backgroundremoval";
import { FetchAccountInfo } from "./fetchaccountinfo";
import { ImprovementProgram } from "./improvementprogram";
export declare const ServerList: readonly ["https://api.remove.bg/v1.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
