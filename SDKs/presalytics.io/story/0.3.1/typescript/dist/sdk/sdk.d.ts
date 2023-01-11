import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Cache } from "./cache";
import { Conversation } from "./conversation";
import { Events } from "./events";
import { Permissions } from "./permissions";
import { Restricted } from "./restricted";
import { Schemas } from "./schemas";
import { Sessions } from "./sessions";
import { Story } from "./story";
import { StoryCollaborators } from "./storycollaborators";
import { Views } from "./views";
export declare const ServerList: readonly ["https://presalytics.io/story"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    cache: Cache;
    conversation: Conversation;
    events: Events;
    permissions: Permissions;
    restricted: Restricted;
    schemas: Schemas;
    sessions: Sessions;
    story: Story;
    storyCollaborators: StoryCollaborators;
    views: Views;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getEnvironment - Environment: Get
     *
     * pass rendering metadata to the client-side scripts
    **/
    getEnvironment(config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * specNoTags - Specification: No tags
     *
     * json-formatted version of this spec with the tags removed to help with codegen processes
    **/
    specNoTags(config?: AxiosRequestConfig): Promise<operations.SpecNoTagsResponse>;
}
