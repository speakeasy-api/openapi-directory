import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EventTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing event tag.
     */
    dfareportingEventTagsDelete(req: operations.DfareportingEventTagsDeleteRequest, security: operations.DfareportingEventTagsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsDeleteResponse>;
    /**
     * Gets one event tag by ID.
     */
    dfareportingEventTagsGet(req: operations.DfareportingEventTagsGetRequest, security: operations.DfareportingEventTagsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsGetResponse>;
    /**
     * Inserts a new event tag.
     */
    dfareportingEventTagsInsert(req: operations.DfareportingEventTagsInsertRequest, security: operations.DfareportingEventTagsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsInsertResponse>;
    /**
     * Retrieves a list of event tags, possibly filtered.
     */
    dfareportingEventTagsList(req: operations.DfareportingEventTagsListRequest, security: operations.DfareportingEventTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsListResponse>;
    /**
     * Updates an existing event tag. This method supports patch semantics.
     */
    dfareportingEventTagsPatch(req: operations.DfareportingEventTagsPatchRequest, security: operations.DfareportingEventTagsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsPatchResponse>;
    /**
     * Updates an existing event tag.
     */
    dfareportingEventTagsUpdate(req: operations.DfareportingEventTagsUpdateRequest, security: operations.DfareportingEventTagsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsUpdateResponse>;
}
