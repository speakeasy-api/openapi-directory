import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Group management
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Group
     */
    deleteGroupsId(req: operations.DeleteGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsIdResponse>;
    /**
     * Fetch a list of Groups
     *
     * @remarks
     * Without any params, returns a list of the Groups the user belongs to
     */
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * Create a Group
     */
    postGroups(req: shared.Group, config?: AxiosRequestConfig): Promise<operations.PostGroupsResponse>;
    /**
     * Update a Group
     */
    putGroupsId(req: operations.PutGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutGroupsIdResponse>;
}
