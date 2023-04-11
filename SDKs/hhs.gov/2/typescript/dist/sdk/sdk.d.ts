import { Campaigns } from "./campaigns";
import { Languages } from "./languages";
import { Media } from "./media";
import { MediaTypes } from "./mediatypes";
import { Resources } from "./resources";
import { Sources } from "./sources";
import { Tags } from "./tags";
import { UserMediaLists } from "./usermedialists";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api/v2"];
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
 * <div class="swagger-ui-wrap extraFooter"><h3>Common Features / Behaviors</h3> <div class="features"> <ul> <li><strong>* "sort" param:</strong> supports multi column sorting through the use of commas as delimiters, and a hyphen to denote descending order. <br/> <strong><span>Examples:</span></strong> <ul> <li><span class="example">name</span><span class="description">sort results by name ascending</span></li> <li><span class="example">-name</span><span class="description">sort results by name descending</span></li> <li><span class="example">-name,id</span><span class="description">sort results by name descending and then by id ascending</span></li> <li><span class="example">id,-dateContentAuthored</span><span class="description">sort results by id ascending and then date descending</span></li> </ul> </li> <li><strong>Date formats:</strong> Date input format is expected to be based on <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a>. <br/> <span><strong>Example:</strong></span> <ul><li>2013-11-18T18:43:01Z</li></ul> </li> </ul> </div> </div>
 */
export declare class SDK {
    /**
     * Information about campaigns
     */
    campaigns: Campaigns;
    /**
     * Information about languages
     */
    languages: Languages;
    /**
     * Information about media
     */
    media: Media;
    /**
     * Information about media types
     */
    mediaTypes: MediaTypes;
    /**
     * Global Search
     */
    resources: Resources;
    /**
     * Information about tags
     */
    sources: Sources;
    /**
     * Information about tags
     */
    tags: Tags;
    /**
     * Get media from user generated lists.
     */
    userMediaLists: UserMediaLists;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
