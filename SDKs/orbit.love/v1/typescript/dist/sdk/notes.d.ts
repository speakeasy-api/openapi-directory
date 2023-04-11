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
     * Get the member's notes
     */
    getWorkspaceSlugMembersMemberSlugNotes(req: operations.GetWorkspaceSlugMembersMemberSlugNotesRequest, security: operations.GetWorkspaceSlugMembersMemberSlugNotesSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugMembersMemberSlugNotesResponse>;
    /**
     * Create a note
     */
    postWorkspaceSlugMembersMemberSlugNotes(req: operations.PostWorkspaceSlugMembersMemberSlugNotesRequest, security: operations.PostWorkspaceSlugMembersMemberSlugNotesSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceSlugMembersMemberSlugNotesResponse>;
    /**
     * Update a note
     */
    putWorkspaceSlugMembersMemberSlugNotesId(req: operations.PutWorkspaceSlugMembersMemberSlugNotesIdRequest, security: operations.PutWorkspaceSlugMembersMemberSlugNotesIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceSlugMembersMemberSlugNotesIdResponse>;
}
