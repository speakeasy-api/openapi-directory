import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storyIdCollaboratorsUseridPermissiontypeGet - Permissions: Story Authorization for a User
     *
     * Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
    **/
    storyIdCollaboratorsUseridPermissiontypeGet(req: operations.StoryIdCollaboratorsUseridPermissiontypeGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPermissiontypeGetResponse>;
    /**
     * storyPermissionTypesGet - Permissions: List Permission Types
     *
     * Returns a list of possible user permission types
    **/
    storyPermissionTypesGet(config?: AxiosRequestConfig): Promise<operations.StoryPermissionTypesGetResponse>;
}
