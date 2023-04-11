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
     * Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
     */
    cloudtraceProjectsTraceSinksCreate(req: operations.CloudtraceProjectsTraceSinksCreateRequest, security: operations.CloudtraceProjectsTraceSinksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksCreateResponse>;
    /**
     * Deletes a sink.
     */
    cloudtraceProjectsTraceSinksDelete(req: operations.CloudtraceProjectsTraceSinksDeleteRequest, security: operations.CloudtraceProjectsTraceSinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksDeleteResponse>;
    /**
     * Get a trace sink by name under the parent resource (GCP project).
     */
    cloudtraceProjectsTraceSinksGet(req: operations.CloudtraceProjectsTraceSinksGetRequest, security: operations.CloudtraceProjectsTraceSinksGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksGetResponse>;
    /**
     * List all sinks for the parent resource (GCP project).
     */
    cloudtraceProjectsTraceSinksList(req: operations.CloudtraceProjectsTraceSinksListRequest, security: operations.CloudtraceProjectsTraceSinksListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksListResponse>;
    /**
     * Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
     */
    cloudtraceProjectsTraceSinksPatch(req: operations.CloudtraceProjectsTraceSinksPatchRequest, security: operations.CloudtraceProjectsTraceSinksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTraceSinksPatchResponse>;
}
