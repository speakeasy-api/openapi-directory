import { AxiosInstance } from "axios";
import { DirectoryApi } from "./directoryapi";
import { PlaylistApi } from "./playlistapi";
import { PodcasterApi } from "./podcasterapi";
import { SearchApi } from "./searchapi";
export declare const ServerList: readonly ["https://listen-api.listennotes.com/api/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    directoryAPI: DirectoryApi;
    playlistAPI: PlaylistApi;
    podcasterAPI: PodcasterApi;
    searchAPI: SearchApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
