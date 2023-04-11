import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a contact.
     */
    mirrorContactsDelete(req: operations.MirrorContactsDeleteRequest, security: operations.MirrorContactsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorContactsDeleteResponse>;
    /**
     * Gets a single contact by ID.
     */
    mirrorContactsGet(req: operations.MirrorContactsGetRequest, security: operations.MirrorContactsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorContactsGetResponse>;
    /**
     * Inserts a new contact.
     */
    mirrorContactsInsert(req: operations.MirrorContactsInsertRequest, security: operations.MirrorContactsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorContactsInsertResponse>;
    /**
     * Retrieves a list of contacts for the authenticated user.
     */
    mirrorContactsList(req: operations.MirrorContactsListRequest, security: operations.MirrorContactsListSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorContactsListResponse>;
    /**
     * Updates a contact in place. This method supports patch semantics.
     */
    mirrorContactsPatch(req: operations.MirrorContactsPatchRequest, security: operations.MirrorContactsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorContactsPatchResponse>;
    /**
     * Updates a contact in place.
     */
    mirrorContactsUpdate(req: operations.MirrorContactsUpdateRequest, security: operations.MirrorContactsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorContactsUpdateResponse>;
}
