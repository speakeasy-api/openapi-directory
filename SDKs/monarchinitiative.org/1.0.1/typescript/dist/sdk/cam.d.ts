import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActivityCollection - Returns list of models
    **/
    getActivityCollection(req: operations.GetActivityCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetActivityCollectionResponse>;
    /**
     * getInstanceObject - Returns list of matches
    **/
    getInstanceObject(req: operations.GetInstanceObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceObjectResponse>;
    /**
     * getModelCollection - Returns list of ALL models
    **/
    getModelCollection(config?: AxiosRequestConfig): Promise<operations.GetModelCollectionResponse>;
    /**
     * getModelContributors - Returns list of all contributors across all models
    **/
    getModelContributors(config?: AxiosRequestConfig): Promise<operations.GetModelContributorsResponse>;
    /**
     * getModelInstances - Returns list of all instances
    **/
    getModelInstances(config?: AxiosRequestConfig): Promise<operations.GetModelInstancesResponse>;
    /**
     * getModelObject - Returns a complete model
    **/
    getModelObject(req: operations.GetModelObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetModelObjectResponse>;
    /**
     * getModelProperties - Returns list of all properties used across all models
    **/
    getModelProperties(req: operations.GetModelPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPropertiesResponse>;
    /**
     * getModelPropertyValues - Returns list property-values for all models
    **/
    getModelPropertyValues(req: operations.GetModelPropertyValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPropertyValuesResponse>;
    /**
     * getModelQuery - Returns list of models matching query
    **/
    getModelQuery(req: operations.GetModelQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetModelQueryResponse>;
    /**
     * getPhysicalInteraction - Returns list of models
    **/
    getPhysicalInteraction(req: operations.GetPhysicalInteractionRequest, config?: AxiosRequestConfig): Promise<operations.GetPhysicalInteractionResponse>;
}
