import { Blogs } from "./blogs";
import { Comments } from "./comments";
import { Pages } from "./pages";
import { Posts } from "./posts";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://blogger.googleapis.com/"];
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
 * The Blogger API provides access to posts, comments and pages of a Blogger blog.
 *
 * @see {@link https://developers.google.com/blogger/docs/3.0/getting_started}
 */
export declare class SDK {
    blogs: Blogs;
    comments: Comments;
    pages: Pages;
    posts: Posts;
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
