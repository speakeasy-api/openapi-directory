import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Specifies which parts of the notification resource should be returned in the response.
 */
export declare enum AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnum {
    NotificationViewUnspecified = "NOTIFICATION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class AdvisorynotificationsOrganizationsLocationsNotificationsListRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     */
    languageCode?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     */
    pageSize?: number;
    /**
     * A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}".
     */
    parent: string;
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
    /**
     * Specifies which parts of the notification resource should be returned in the response.
     */
    view?: AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnum;
}
export declare class AdvisorynotificationsOrganizationsLocationsNotificationsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudAdvisorynotificationsV1ListNotificationsResponse?: shared.GoogleCloudAdvisorynotificationsV1ListNotificationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
