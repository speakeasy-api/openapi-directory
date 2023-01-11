import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Feature {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFeature - Feature Detail
     *
     * Return the content of the selected feature.
    **/
    getFeature(req: operations.GetFeatureRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureResponse>;
    /**
     * listFeatureTypes - Feature Type Collection
     *
     * Return a collection of Feature Types.
    **/
    listFeatureTypes(req: operations.ListFeatureTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListFeatureTypesResponse>;
    /**
     * listFeatures - Feature Collection
     *
     * Return a collection of Feature.
    **/
    listFeatures(req: operations.ListFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.ListFeaturesResponse>;
}
