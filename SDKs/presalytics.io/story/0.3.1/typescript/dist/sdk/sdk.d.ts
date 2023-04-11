import { Cache } from "./cache";
import { Conversation } from "./conversation";
import { Events } from "./events";
import * as operations from "./models/operations";
import { Permissions } from "./permissions";
import { Restricted } from "./restricted";
import { Schemas } from "./schemas";
import { Sessions } from "./sessions";
import { Story } from "./story";
import { StoryCollaborators } from "./storycollaborators";
import { Views } from "./views";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/story"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API
 */
export declare class SDK {
    cache: Cache;
    conversation: Conversation;
    events: Events;
    /**
     * Permissions and Authorization
     */
    permissions: Permissions;
    restricted: Restricted;
    schemas: Schemas;
    sessions: Sessions;
    /**
     * Story
     */
    story: Story;
    /**
     * Story Collaborators
     */
    storyCollaborators: StoryCollaborators;
    views: Views;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Environment: Get
     *
     * @remarks
     * pass rendering metadata to the client-side scripts
     */
    getEnvironment(config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * Specification: No tags
     *
     * @remarks
     * json-formatted version of this spec with the tags removed to help with codegen processes
     */
    specNoTags(config?: AxiosRequestConfig): Promise<operations.SpecNoTagsResponse>;
}
