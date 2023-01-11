import { AxiosInstance } from "axios";
import { Campaigns } from "./campaigns";
import { Languages } from "./languages";
import { Media } from "./media";
import { MediaTypes } from "./mediatypes";
import { Resources } from "./resources";
import { Sources } from "./sources";
import { Tags } from "./tags";
import { UserMediaLists } from "./usermedialists";
export declare const ServerList: readonly ["https://hhs.gov/api/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    campaigns: Campaigns;
    languages: Languages;
    media: Media;
    mediaTypes: MediaTypes;
    resources: Resources;
    sources: Sources;
    tags: Tags;
    userMediaLists: UserMediaLists;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
