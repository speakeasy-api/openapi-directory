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
     * Feature Detail
     *
     * @remarks
     * Return the content of the selected feature.
     */
    getFeature(req: operations.GetFeatureRequest, security: operations.GetFeatureSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeatureResponse>;
    /**
     * Feature Type Collection
     *
     * @remarks
     * Return a collection of Feature Types.
     */
    listFeatureTypes(config?: AxiosRequestConfig): Promise<operations.ListFeatureTypesResponse>;
    /**
     * Feature Collection
     *
     * @remarks
     * Return a collection of Feature.
     */
    listFeatures(req: operations.ListFeaturesRequest, security: operations.ListFeaturesSecurity, config?: AxiosRequestConfig): Promise<operations.ListFeaturesResponse>;
}
