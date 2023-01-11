import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Misc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getApiMiscCultures(req: operations.GetApiMiscCulturesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMiscCulturesResponse>;
    getApiMiscRandomAddress(req: operations.GetApiMiscRandomAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMiscRandomAddressResponse>;
}
