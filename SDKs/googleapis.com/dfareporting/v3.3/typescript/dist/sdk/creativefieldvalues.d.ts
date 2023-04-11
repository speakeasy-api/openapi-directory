import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreativeFieldValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing creative field value.
     */
    dfareportingCreativeFieldValuesDelete(req: operations.DfareportingCreativeFieldValuesDeleteRequest, security: operations.DfareportingCreativeFieldValuesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesDeleteResponse>;
    /**
     * Gets one creative field value by ID.
     */
    dfareportingCreativeFieldValuesGet(req: operations.DfareportingCreativeFieldValuesGetRequest, security: operations.DfareportingCreativeFieldValuesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesGetResponse>;
    /**
     * Inserts a new creative field value.
     */
    dfareportingCreativeFieldValuesInsert(req: operations.DfareportingCreativeFieldValuesInsertRequest, security: operations.DfareportingCreativeFieldValuesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesInsertResponse>;
    /**
     * Retrieves a list of creative field values, possibly filtered. This method supports paging.
     */
    dfareportingCreativeFieldValuesList(req: operations.DfareportingCreativeFieldValuesListRequest, security: operations.DfareportingCreativeFieldValuesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesListResponse>;
    /**
     * Updates an existing creative field value. This method supports patch semantics.
     */
    dfareportingCreativeFieldValuesPatch(req: operations.DfareportingCreativeFieldValuesPatchRequest, security: operations.DfareportingCreativeFieldValuesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesPatchResponse>;
    /**
     * Updates an existing creative field value.
     */
    dfareportingCreativeFieldValuesUpdate(req: operations.DfareportingCreativeFieldValuesUpdateRequest, security: operations.DfareportingCreativeFieldValuesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesUpdateResponse>;
}
