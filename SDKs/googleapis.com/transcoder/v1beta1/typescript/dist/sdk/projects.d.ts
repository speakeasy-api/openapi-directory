import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a job template in the specified region.
     */
    transcoderProjectsLocationsJobTemplatesCreate(req: operations.TranscoderProjectsLocationsJobTemplatesCreateRequest, security: operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesCreateResponse>;
    /**
     * Deletes a job template.
     */
    transcoderProjectsLocationsJobTemplatesDelete(req: operations.TranscoderProjectsLocationsJobTemplatesDeleteRequest, security: operations.TranscoderProjectsLocationsJobTemplatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesDeleteResponse>;
    /**
     * Returns the job template data.
     */
    transcoderProjectsLocationsJobTemplatesGet(req: operations.TranscoderProjectsLocationsJobTemplatesGetRequest, security: operations.TranscoderProjectsLocationsJobTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesGetResponse>;
    /**
     * Lists job templates in the specified region.
     */
    transcoderProjectsLocationsJobTemplatesList(req: operations.TranscoderProjectsLocationsJobTemplatesListRequest, security: operations.TranscoderProjectsLocationsJobTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesListResponse>;
    /**
     * Creates a job in the specified region.
     */
    transcoderProjectsLocationsJobsCreate(req: operations.TranscoderProjectsLocationsJobsCreateRequest, security: operations.TranscoderProjectsLocationsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobsCreateResponse>;
    /**
     * Lists jobs in the specified region.
     */
    transcoderProjectsLocationsJobsList(req: operations.TranscoderProjectsLocationsJobsListRequest, security: operations.TranscoderProjectsLocationsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobsListResponse>;
}
