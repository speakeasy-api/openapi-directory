import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RelationUsage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRelationUsageBetweenResource - All relations used plus count of associations
    **/
    getRelationUsageBetweenResource(req: operations.GetRelationUsageBetweenResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationUsageBetweenResourceResponse>;
    /**
     * getRelationUsagePivotLabelResource - Relation usage count for all subj x obj category combinations, showing label
    **/
    getRelationUsagePivotLabelResource(req: operations.GetRelationUsagePivotLabelResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationUsagePivotLabelResourceResponse>;
    /**
     * getRelationUsagePivotResource - Relation usage count for all subj x obj category combinations
    **/
    getRelationUsagePivotResource(req: operations.GetRelationUsagePivotResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationUsagePivotResourceResponse>;
    /**
     * getRelationUsageResource - All relations used plus count of associations
    **/
    getRelationUsageResource(req: operations.GetRelationUsageResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationUsageResourceResponse>;
}
