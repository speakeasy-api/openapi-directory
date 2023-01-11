import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Currencies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listSupportedCurrenciesV2 - List Supported Currencies
     *
     * List the supported currencies.
    **/
    listSupportedCurrenciesV2(config?: AxiosRequestConfig): Promise<operations.ListSupportedCurrenciesV2Response>;
}
