import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DomesticStandingOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Domestic Standing Order Consents
     */
    createDomesticStandingOrderConsentsJson(req: operations.CreateDomesticStandingOrderConsentsJsonRequest, security: operations.CreateDomesticStandingOrderConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticStandingOrderConsentsJsonResponse>;
    /**
     * Create Domestic Standing Order Consents
     */
    createDomesticStandingOrderConsentsRaw(req: operations.CreateDomesticStandingOrderConsentsRawRequest, security: operations.CreateDomesticStandingOrderConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticStandingOrderConsentsRawResponse>;
    /**
     * Create Domestic Standing Orders
     */
    createDomesticStandingOrdersJson(req: operations.CreateDomesticStandingOrdersJsonRequest, security: operations.CreateDomesticStandingOrdersJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticStandingOrdersJsonResponse>;
    /**
     * Create Domestic Standing Orders
     */
    createDomesticStandingOrdersRaw(req: operations.CreateDomesticStandingOrdersRawRequest, security: operations.CreateDomesticStandingOrdersRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticStandingOrdersRawResponse>;
    /**
     * Get Domestic Standing Order Consents
     */
    getDomesticStandingOrderConsentsConsentId(req: operations.GetDomesticStandingOrderConsentsConsentIdRequest, security: operations.GetDomesticStandingOrderConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticStandingOrderConsentsConsentIdResponse>;
    /**
     * Get Domestic Standing Orders
     */
    getDomesticStandingOrdersDomesticStandingOrderId(req: operations.GetDomesticStandingOrdersDomesticStandingOrderIdRequest, security: operations.GetDomesticStandingOrdersDomesticStandingOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticStandingOrdersDomesticStandingOrderIdResponse>;
}
