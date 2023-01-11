import { AxiosInstance } from "axios";
import { Blogs } from "./blogs";
import { Comments } from "./comments";
import { Pages } from "./pages";
import { Posts } from "./posts";
import { Users } from "./users";
export declare const ServerList: readonly ["https://blogger.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
