import { AxiosInstance } from "axios";
import { Pricing } from "./pricing";
export declare const ServerList: readonly ["https://rest.nexmo.com/account"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    pricing: Pricing;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
