import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingMobileAppsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum DfareportingMobileAppsListDirectoriesEnum {
    Unknown = "UNKNOWN",
    AppleAppStore = "APPLE_APP_STORE",
    GooglePlayStore = "GOOGLE_PLAY_STORE",
    RokuAppStore = "ROKU_APP_STORE",
    AmazonFiretvAppStore = "AMAZON_FIRETV_APP_STORE",
    PlaystationAppStore = "PLAYSTATION_APP_STORE",
    AppleTvAppStore = "APPLE_TV_APP_STORE",
    XboxAppStore = "XBOX_APP_STORE",
    SamsungTvAppStore = "SAMSUNG_TV_APP_STORE",
    AndroidTvAppStore = "ANDROID_TV_APP_STORE",
    GenericCtvAppStore = "GENERIC_CTV_APP_STORE"
}
export declare class DfareportingMobileAppsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Select only apps from these directories.
     */
    directories?: DfareportingMobileAppsListDirectoriesEnum[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only apps with these IDs.
     */
    ids?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * User profile ID associated with this request.
     */
    profileId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
     */
    searchString?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingMobileAppsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    mobileAppsListResponse?: shared.MobileAppsListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
