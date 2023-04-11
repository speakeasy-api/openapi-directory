import { About } from "./about";
import { Apps } from "./apps";
import { Changes } from "./changes";
import { Channels } from "./channels";
import { Children } from "./children";
import { Comments } from "./comments";
import { Drives } from "./drives";
import { Files } from "./files";
import { Parents } from "./parents";
import { Permissions } from "./permissions";
import { Properties } from "./properties";
import { Replies } from "./replies";
import { Revisions } from "./revisions";
import { Teamdrives } from "./teamdrives";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/drive/v2"];
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
    apps: Apps;
    changes: Changes;
    channels: Channels;
    children: Children;
    comments: Comments;
    drives: Drives;
    files: Files;
    parents: Parents;
    permissions: Permissions;
    properties: Properties;
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
