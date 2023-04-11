import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoint for getting Commercial Credit Card data
 */
export declare class Ccc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of all `Commerical Credit Card` objects.
     */
    getCommercialCreditCards(req: operations.GetCommercialCreditCardsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommercialCreditCardsResponse>;
    /**
     * Gets header information on the current set of `Commerical Credit Card` data
     */
    headCommercialCreditCards(req: operations.HeadCommercialCreditCardsRequest, config?: AxiosRequestConfig): Promise<operations.HeadCommercialCreditCardsResponse>;
}
