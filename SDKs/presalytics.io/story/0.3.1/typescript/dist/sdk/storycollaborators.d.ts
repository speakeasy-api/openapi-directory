import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Story Collaborators
 */
export declare class StoryCollaborators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Story Collaborators: List
     *
     * @remarks
     * Gets a list users that can read or edit this story
     */
    storyIdCollaboratorsGet(req: operations.StoryIdCollaboratorsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsGetResponse>;
    /**
     * Story Collaborators: Edit Inactive User Permission
     *
     * @remarks
     * Edit story permissions for inactive users.  Requires admin rights.
     */
    storyIdCollaboratorsInactivePost(req: operations.StoryIdCollaboratorsInactivePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsInactivePostResponse>;
    /**
     * Story Collaborators: Add New User
     *
     * @remarks
     * Add a colloborator to this story
     */
    storyIdCollaboratorsPost(req: operations.StoryIdCollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsPostResponse>;
    /**
     * Story Collaborators: Remove User
     *
     * @remarks
     * Remove a collaborator from this story
     */
    storyIdCollaboratorsUseridDelete(req: operations.StoryIdCollaboratorsUseridDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridDeleteResponse>;
    /**
     * Story Collaborators: Access Permissions
     *
     * @remarks
     * Data to help you understand the access rights of a particular collaborator on this story
     */
    storyIdCollaboratorsUseridGet(req: operations.StoryIdCollaboratorsUseridGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridGetResponse>;
    /**
     * Story Collaborators: Edit Access Rights
     *
     * @remarks
     * Modify a user's access right to this story (e.g., grant edit permissions)
     */
    storyIdCollaboratorsUseridPut(req: operations.StoryIdCollaboratorsUseridPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPutResponse>;
}
