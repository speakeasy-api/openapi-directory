import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetingTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one targeting template by ID.
     */
    dfareportingTargetingTemplatesGet(req: operations.DfareportingTargetingTemplatesGetRequest, security: operations.DfareportingTargetingTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesGetResponse>;
    /**
     * Inserts a new targeting template.
     */
    dfareportingTargetingTemplatesInsert(req: operations.DfareportingTargetingTemplatesInsertRequest, security: operations.DfareportingTargetingTemplatesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesInsertResponse>;
    /**
     * Retrieves a list of targeting templates, optionally filtered. This method supports paging.
     */
    dfareportingTargetingTemplatesList(req: operations.DfareportingTargetingTemplatesListRequest, security: operations.DfareportingTargetingTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesListResponse>;
    /**
     * Updates an existing targeting template. This method supports patch semantics.
     */
    dfareportingTargetingTemplatesPatch(req: operations.DfareportingTargetingTemplatesPatchRequest, security: operations.DfareportingTargetingTemplatesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesPatchResponse>;
    /**
     * Updates an existing targeting template.
     */
    dfareportingTargetingTemplatesUpdate(req: operations.DfareportingTargetingTemplatesUpdateRequest, security: operations.DfareportingTargetingTemplatesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesUpdateResponse>;
}
