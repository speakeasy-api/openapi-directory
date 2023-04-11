import { Groups } from "./groups";
import { Messages } from "./messages";
import { Misc } from "./misc";
import * as shared from "./models/shared";
import { Photos } from "./photos";
import { Posts } from "./posts";
import { Stories } from "./stories";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://trashnothing.com/api/v1.3"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * This is the REST API for [trashnothing.com](https://trashnothing.com).
 *
 * @remarks
 *
 * To learn more about the API or to register your app for use with the API
 * visit the [trash nothing Developer page](https://trashnothing.com/developer).
 *
 * NOTE: All date-time values are [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)
 * and are in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) (eg. 2019-02-03T01:23:53).
 *
 */
export declare class SDK {
    /**
     * Search, subscribe and unsubscribe to groups.
     */
    groups: Groups;
    /**
     * Manage conversations and messages with other users. <br /><br /> It's important to note that messages are always sent by email to the users.   So it's possible to create a fully functional app using the trash nothing API without using any of the conversations or messages API endpoints.  These API endpoints are useful for developers who want to build a complete messaging interface into their app.
     *
     * @remarks
     *
     */
    messages: Messages;
    /**
     * Miscellaneous functionality.
     */
    misc: Misc;
    /**
     * Upload, delete and rotate photos.
     */
    photos: Photos;
    /**
     * Retrieve and update posts.
     */
    posts: Posts;
    /**
     * Retrieve and submit stories.
     */
    stories: Stories;
    /**
     * Retrieve and update user data.
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
