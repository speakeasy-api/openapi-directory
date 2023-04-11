import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Limits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
     */
    drivelabelsLimitsGetLabel(req: operations.DrivelabelsLimitsGetLabelRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLimitsGetLabelResponse>;
}
