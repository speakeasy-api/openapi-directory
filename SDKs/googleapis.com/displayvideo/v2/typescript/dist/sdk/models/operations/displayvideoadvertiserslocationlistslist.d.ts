import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoAdvertisersLocationListsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoAdvertisersLocationListsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Required. The ID of the DV360 advertiser to which the fetched location lists belong.
     */
    advertiserId: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `locationType` Examples: * All regional location list: `locationType="TARGETING_LOCATION_TYPE_REGIONAL"` * All proximity location list: `locationType="TARGETING_LOCATION_TYPE_PROXIMITY"`
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     */
    orderBy?: string;
    /**
     * Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersLocationListsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listLocationListsResponse?: shared.ListLocationListsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
