import { AxiosInstance } from "axios";
import { DetailedZipCodeInformation } from "./detailedzipcodeinformation";
export declare const ServerList: readonly ["https://api.interzoid.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    detailedZipCodeInformation: DetailedZipCodeInformation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
