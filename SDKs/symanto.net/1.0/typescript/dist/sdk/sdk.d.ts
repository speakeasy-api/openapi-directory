import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { TextAnalysis } from "./textanalysis";
export declare const ServerList: readonly ["https://api.symanto.net"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    textAnalysis: TextAnalysis;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
