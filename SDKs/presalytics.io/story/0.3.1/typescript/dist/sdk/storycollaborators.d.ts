import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StoryCollaborators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storyIdCollaboratorsGet - Story Collaborators: List
     *
     * Gets a list users that can read or edit this story
    **/
    storyIdCollaboratorsGet(req: operations.StoryIdCollaboratorsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsGetResponse>;
    /**
     * storyIdCollaboratorsInactivePost - Story Collaborators: Edit Inactive User Permission
     *
     * Edit story permissions for inactive users.  Requires admin rights.
    **/
    storyIdCollaboratorsInactivePost(req: operations.StoryIdCollaboratorsInactivePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsInactivePostResponse>;
    /**
     * storyIdCollaboratorsPost - Story Collaborators: Add New User
     *
     * Add a colloborator to this story
    **/
    storyIdCollaboratorsPost(req: operations.StoryIdCollaboratorsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsPostResponse>;
    /**
     * storyIdCollaboratorsUseridDelete - Story Collaborators: Remove User
     *
     * Remove a collaborator from this story
    **/
    storyIdCollaboratorsUseridDelete(req: operations.StoryIdCollaboratorsUseridDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridDeleteResponse>;
    /**
     * storyIdCollaboratorsUseridGet - Story Collaborators: Access Permissions
     *
     * Data to help you understand the access rights of a particular collaborator on this story
    **/
    storyIdCollaboratorsUseridGet(req: operations.StoryIdCollaboratorsUseridGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridGetResponse>;
    /**
     * storyIdCollaboratorsUseridPut - Story Collaborators: Edit Access Rights
     *
     * Modify a user's access right to this story (e.g., grant edit permissions)
    **/
    storyIdCollaboratorsUseridPut(req: operations.StoryIdCollaboratorsUseridPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdCollaboratorsUseridPutResponse>;
}
