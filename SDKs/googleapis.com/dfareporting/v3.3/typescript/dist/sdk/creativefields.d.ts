import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreativeFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing creative field.
     */
    dfareportingCreativeFieldsDelete(req: operations.DfareportingCreativeFieldsDeleteRequest, security: operations.DfareportingCreativeFieldsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsDeleteResponse>;
    /**
     * Gets one creative field by ID.
     */
    dfareportingCreativeFieldsGet(req: operations.DfareportingCreativeFieldsGetRequest, security: operations.DfareportingCreativeFieldsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsGetResponse>;
    /**
     * Inserts a new creative field.
     */
    dfareportingCreativeFieldsInsert(req: operations.DfareportingCreativeFieldsInsertRequest, security: operations.DfareportingCreativeFieldsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsInsertResponse>;
    /**
     * Retrieves a list of creative fields, possibly filtered. This method supports paging.
     */
    dfareportingCreativeFieldsList(req: operations.DfareportingCreativeFieldsListRequest, security: operations.DfareportingCreativeFieldsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsListResponse>;
    /**
     * Updates an existing creative field. This method supports patch semantics.
     */
    dfareportingCreativeFieldsPatch(req: operations.DfareportingCreativeFieldsPatchRequest, security: operations.DfareportingCreativeFieldsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsPatchResponse>;
    /**
     * Updates an existing creative field.
     */
    dfareportingCreativeFieldsUpdate(req: operations.DfareportingCreativeFieldsUpdateRequest, security: operations.DfareportingCreativeFieldsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsUpdateResponse>;
}
