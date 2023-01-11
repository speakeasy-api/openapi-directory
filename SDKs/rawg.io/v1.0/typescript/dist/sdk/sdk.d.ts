import { AxiosInstance } from "axios";
import { CreatorRoles } from "./creatorroles";
import { Creators } from "./creators";
import { Developers } from "./developers";
import { Games } from "./games";
import { Genres } from "./genres";
import { Platforms } from "./platforms";
import { Publishers } from "./publishers";
import { Stores } from "./stores";
import { Tags } from "./tags";
export declare const ServerList: readonly ["https://api.rawg.io/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    creatorRoles: CreatorRoles;
    creators: Creators;
    developers: Developers;
    games: Games;
    genres: Genres;
    platforms: Platforms;
    publishers: Publishers;
    stores: Stores;
    tags: Tags;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
