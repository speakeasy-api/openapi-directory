import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Permissions and Authorization
 */
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permissions: Story Authorization for a User
     *
     * @remarks
     * Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
     */
    storyIdCollaboratorsUseridPermissiontypeGet(req: operations.StoryIdCollaboratorsUseridPermissiontypeGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPermissiontypeGetResponse>;
    /**
     * Permissions: List Permission Types
     *
     * @remarks
     * Returns a list of possible user permission types
     */
    storyPermissionTypesGet(config?: AxiosRequestConfig): Promise<operations.StoryPermissionTypesGetResponse>;
}
