import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create, List, Updated and Delete Numbers (DDIs)
 */
export declare class Numbers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List available SureVoIP Ofcom number allocations for purchase
     */
    getNumbers(config?: AxiosRequestConfig): Promise<operations.GetNumbersResponse>;
}
