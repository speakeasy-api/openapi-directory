import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Notes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new note.
     */
    keepNotesCreate(req: operations.KeepNotesCreateRequest, security: operations.KeepNotesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.KeepNotesCreateResponse>;
    /**
     * Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
     */
    keepNotesDelete(req: operations.KeepNotesDeleteRequest, security: operations.KeepNotesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.KeepNotesDeleteResponse>;
    /**
     * Gets a note.
     */
    keepNotesGet(req: operations.KeepNotesGetRequest, security: operations.KeepNotesGetSecurity, config?: AxiosRequestConfig): Promise<operations.KeepNotesGetResponse>;
    /**
     * Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
     */
    keepNotesList(req: operations.KeepNotesListRequest, security: operations.KeepNotesListSecurity, config?: AxiosRequestConfig): Promise<operations.KeepNotesListResponse>;
    /**
     * Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
     */
    keepNotesPermissionsBatchCreate(req: operations.KeepNotesPermissionsBatchCreateRequest, security: operations.KeepNotesPermissionsBatchCreateSecurity, config?: AxiosRequestConfig): Promise<operations.KeepNotesPermissionsBatchCreateResponse>;
    /**
     * Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.
     */
    keepNotesPermissionsBatchDelete(req: operations.KeepNotesPermissionsBatchDeleteRequest, security: operations.KeepNotesPermissionsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.KeepNotesPermissionsBatchDeleteResponse>;
}
