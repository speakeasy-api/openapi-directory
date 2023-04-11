import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Feature {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a feature by its featureId
     *
     * @remarks
     * Get information about the geographical feature with the specified featureId.
     */
    getFeaturesFeatureId(req: operations.GetFeaturesFeatureIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturesFeatureIdResponse>;
}
