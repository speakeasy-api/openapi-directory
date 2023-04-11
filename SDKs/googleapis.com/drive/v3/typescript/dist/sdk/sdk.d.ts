import { About } from "./about";
import { Changes } from "./changes";
import { Channels } from "./channels";
import { Comments } from "./comments";
import { Drives } from "./drives";
import { Files } from "./files";
import { Permissions } from "./permissions";
import { Replies } from "./replies";
import { Revisions } from "./revisions";
import { Teamdrives } from "./teamdrives";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/drive/v3"];
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
 * Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
 *
 * @see {@link https://developers.google.com/drive/}
 */
export declare class SDK {
    about: About;
    changes: Changes;
    channels: Channels;
    comments: Comments;
    drives: Drives;
    files: Files;
    permissions: Permissions;
    replies: Replies;
    revisions: Revisions;
    teamdrives: Teamdrives;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
