import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.
 */
export declare class Member {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a member
     */
    createMember(req: operations.CreateMemberRequest, config?: AxiosRequestConfig): Promise<operations.CreateMemberResponse>;
    /**
     * Delete a member
     */
    deleteMember(req: operations.DeleteMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    /**
     * Retrieve a member
     */
    getMember(req: operations.GetMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberResponse>;
    /**
     * List members
     *
     * @remarks
     * This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).
     */
    getMembers(req: operations.GetMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetMembersResponse>;
    /**
     * Update a member
     */
    updateMember(req: operations.UpdateMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMemberResponse>;
}
