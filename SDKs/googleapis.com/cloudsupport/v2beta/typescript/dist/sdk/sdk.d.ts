import { AxiosInstance } from "axios";
import { CaseClassifications } from "./caseclassifications";
import { Cases } from "./cases";
import { Media } from "./media";
export declare const ServerList: readonly ["https://cloudsupport.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    caseClassifications: CaseClassifications;
    cases: Cases;
    media: Media;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
