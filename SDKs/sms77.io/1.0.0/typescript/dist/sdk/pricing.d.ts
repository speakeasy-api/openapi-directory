import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://sms77.io/en/docs/gateway/http-api/pricing} - Retrieve pricing information
 */
export declare class Pricing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    pricing(req: operations.PricingRequest, config?: AxiosRequestConfig): Promise<operations.PricingResponse>;
}
