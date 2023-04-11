import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Currencies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List currencies
     *
     * @remarks
     * Lists currencies supported by PocketSmith.
     */
    getCurrencies(config?: AxiosRequestConfig): Promise<operations.GetCurrenciesResponse>;
    /**
     * Get currency
     *
     * @remarks
     * Gets a particular currency by its ID.
     */
    getCurrenciesId(req: operations.GetCurrenciesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrenciesIdResponse>;
}
