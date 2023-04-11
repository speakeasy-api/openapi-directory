import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Live Website Tracking Parameters
 */
export declare class LiveWebsiteTrackingParameters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an Live Website Tracking Parameter
     *
     * @remarks
     * Creates a Live Website Tracking parameter to identify a person
     *
     */
    postV2LiveWebsiteTrackingParametersJson(req: operations.PostV2LiveWebsiteTrackingParametersJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2LiveWebsiteTrackingParametersJsonResponse>;
}
