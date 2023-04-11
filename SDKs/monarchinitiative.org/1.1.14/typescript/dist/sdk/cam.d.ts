import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations on GO Causal Activity Models (GO-CAMs)
 */
export declare class Cam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of models
     */
    getActivityCollection(req: operations.GetActivityCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetActivityCollectionResponse>;
    /**
     * Returns list of matches
     */
    getInstanceObject(req: operations.GetInstanceObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceObjectResponse>;
    /**
     * Returns list of ALL models
     */
    getModelCollection(config?: AxiosRequestConfig): Promise<operations.GetModelCollectionResponse>;
    /**
     * Returns list of all contributors across all models
     */
    getModelContributors(config?: AxiosRequestConfig): Promise<operations.GetModelContributorsResponse>;
    /**
     * Returns list of all instances
     */
    getModelInstances(config?: AxiosRequestConfig): Promise<operations.GetModelInstancesResponse>;
    /**
     * Returns a complete model
     */
    getModelObject(req: operations.GetModelObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetModelObjectResponse>;
    /**
     * Returns list of all properties used across all models
     */
    getModelProperties(req: operations.GetModelPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPropertiesResponse>;
    /**
     * Returns list property-values for all models
     */
    getModelPropertyValues(req: operations.GetModelPropertyValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPropertyValuesResponse>;
    /**
     * Returns list of models matching query
     */
    getModelQuery(req: operations.GetModelQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetModelQueryResponse>;
    /**
     * Returns list of models
     */
    getPhysicalInteraction(req: operations.GetPhysicalInteractionRequest, config?: AxiosRequestConfig): Promise<operations.GetPhysicalInteractionResponse>;
}
