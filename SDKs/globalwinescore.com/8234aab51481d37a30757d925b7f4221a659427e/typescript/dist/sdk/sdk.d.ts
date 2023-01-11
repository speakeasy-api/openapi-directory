import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { GlobalWineScore } from "./globalwinescore";
export declare const ServerList: readonly ["https://api.globalwinescore.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    globalWineScore: GlobalWineScore;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
