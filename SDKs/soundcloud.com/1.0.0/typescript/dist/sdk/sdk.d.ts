import { AxiosInstance } from "axios";
import { Likes } from "./likes";
import { Me } from "./me";
import { Miscellaneous } from "./miscellaneous";
import { Oauth } from "./oauth";
import { Playlists } from "./playlists";
import { Reposts } from "./reposts";
import { Search } from "./search";
import { Tracks } from "./tracks";
import { Users } from "./users";
export declare const ServerList: readonly ["https://api.soundcloud.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    likes: Likes;
    me: Me;
    miscellaneous: Miscellaneous;
    oauth: Oauth;
    playlists: Playlists;
    reposts: Reposts;
    search: Search;
    tracks: Tracks;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
