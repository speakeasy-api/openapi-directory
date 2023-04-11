import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionInstanceTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.
     */
    computeRegionInstanceTemplatesDelete(req: operations.ComputeRegionInstanceTemplatesDeleteRequest, security: operations.ComputeRegionInstanceTemplatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceTemplatesDeleteResponse>;
    /**
     * Returns the specified instance template.
     */
    computeRegionInstanceTemplatesGet(req: operations.ComputeRegionInstanceTemplatesGetRequest, security: operations.ComputeRegionInstanceTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceTemplatesGetResponse>;
    /**
     * Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.
     */
    computeRegionInstanceTemplatesInsert(req: operations.ComputeRegionInstanceTemplatesInsertRequest, security: operations.ComputeRegionInstanceTemplatesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceTemplatesInsertResponse>;
    /**
     * Retrieves a list of instance templates that are contained within the specified project and region.
     */
    computeRegionInstanceTemplatesList(req: operations.ComputeRegionInstanceTemplatesListRequest, security: operations.ComputeRegionInstanceTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceTemplatesListResponse>;
}
