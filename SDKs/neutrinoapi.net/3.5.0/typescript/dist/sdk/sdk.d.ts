import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { DataTools } from "./datatools";
import { ECommerce } from "./ecommerce";
import { Geolocation } from "./geolocation";
import { Imaging } from "./imaging";
import { SecurityAndNetworking } from "./securityandnetworking";
import { Telephony } from "./telephony";
import { Www } from "./www";
export declare const ServerList: readonly ["https://neutrinoapi.net"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    dataTools: DataTools;
    eCommerce: ECommerce;
    geolocation: Geolocation;
    imaging: Imaging;
    securityAndNetworking: SecurityAndNetworking;
    telephony: Telephony;
    www: Www;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
