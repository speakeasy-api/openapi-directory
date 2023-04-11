import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingChangeLogsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Select only change logs with the specified action.
 */
export declare enum DfareportingChangeLogsListActionEnum {
    ActionCreate = "ACTION_CREATE",
    ActionUpdate = "ACTION_UPDATE",
    ActionDelete = "ACTION_DELETE",
    ActionEnable = "ACTION_ENABLE",
    ActionDisable = "ACTION_DISABLE",
    ActionAdd = "ACTION_ADD",
    ActionRemove = "ACTION_REMOVE",
    ActionMarkAsDefault = "ACTION_MARK_AS_DEFAULT",
    ActionAssociate = "ACTION_ASSOCIATE",
    ActionAssign = "ACTION_ASSIGN",
    ActionUnassign = "ACTION_UNASSIGN",
    ActionSend = "ACTION_SEND",
    ActionLink = "ACTION_LINK",
    ActionUnlink = "ACTION_UNLINK",
    ActionPush = "ACTION_PUSH",
    ActionEmailTags = "ACTION_EMAIL_TAGS",
    ActionShare = "ACTION_SHARE"
}
/**
 * Select only change logs with the specified object type.
 */
export declare enum DfareportingChangeLogsListObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER",
    ObjectFloodlightConfiguration = "OBJECT_FLOODLIGHT_CONFIGURATION",
    ObjectAd = "OBJECT_AD",
    ObjectFloodlightActvity = "OBJECT_FLOODLIGHT_ACTVITY",
    ObjectCampaign = "OBJECT_CAMPAIGN",
    ObjectFloodlightActivityGroup = "OBJECT_FLOODLIGHT_ACTIVITY_GROUP",
    ObjectCreative = "OBJECT_CREATIVE",
    ObjectPlacement = "OBJECT_PLACEMENT",
    ObjectDfaSite = "OBJECT_DFA_SITE",
    ObjectUserRole = "OBJECT_USER_ROLE",
    ObjectUserProfile = "OBJECT_USER_PROFILE",
    ObjectAdvertiserGroup = "OBJECT_ADVERTISER_GROUP",
    ObjectAccount = "OBJECT_ACCOUNT",
    ObjectSubaccount = "OBJECT_SUBACCOUNT",
    ObjectRichmediaCreative = "OBJECT_RICHMEDIA_CREATIVE",
    ObjectInstreamCreative = "OBJECT_INSTREAM_CREATIVE",
    ObjectMediaOrder = "OBJECT_MEDIA_ORDER",
    ObjectContentCategory = "OBJECT_CONTENT_CATEGORY",
    ObjectPlacementStrategy = "OBJECT_PLACEMENT_STRATEGY",
    ObjectSdSite = "OBJECT_SD_SITE",
    ObjectSize = "OBJECT_SIZE",
    ObjectCreativeGroup = "OBJECT_CREATIVE_GROUP",
    ObjectCreativeAsset = "OBJECT_CREATIVE_ASSET",
    ObjectUserProfileFilter = "OBJECT_USER_PROFILE_FILTER",
    ObjectLandingPage = "OBJECT_LANDING_PAGE",
    ObjectCreativeField = "OBJECT_CREATIVE_FIELD",
    ObjectRemarketingList = "OBJECT_REMARKETING_LIST",
    ObjectProvidedListClient = "OBJECT_PROVIDED_LIST_CLIENT",
    ObjectEventTag = "OBJECT_EVENT_TAG",
    ObjectCreativeBundle = "OBJECT_CREATIVE_BUNDLE",
    ObjectBillingAccountGroup = "OBJECT_BILLING_ACCOUNT_GROUP",
    ObjectBillingFeature = "OBJECT_BILLING_FEATURE",
    ObjectRateCard = "OBJECT_RATE_CARD",
    ObjectAccountBillingFeature = "OBJECT_ACCOUNT_BILLING_FEATURE",
    ObjectBillingMinimumFee = "OBJECT_BILLING_MINIMUM_FEE",
    ObjectBillingProfile = "OBJECT_BILLING_PROFILE",
    ObjectPlaystoreLink = "OBJECT_PLAYSTORE_LINK",
    ObjectTargetingTemplate = "OBJECT_TARGETING_TEMPLATE",
    ObjectSearchLiftStudy = "OBJECT_SEARCH_LIFT_STUDY",
    ObjectFloodlightDv360Link = "OBJECT_FLOODLIGHT_DV360_LINK",
    ObjectAdvertiserCustomerLink = "OBJECT_ADVERTISER_CUSTOMER_LINK"
}
export declare class DfareportingChangeLogsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only change logs with the specified action.
     */
    action?: DfareportingChangeLogsListActionEnum;
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
     * Select only change logs with these IDs.
     */
    ids?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     */
    maxChangeTime?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     */
    minChangeTime?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Select only change logs with these object IDs.
     */
    objectIds?: string[];
    /**
     * Select only change logs with the specified object type.
     */
    objectType?: DfareportingChangeLogsListObjectTypeEnum;
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
     * Select only change logs whose object ID, user name, old or new values match the search string.
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
    /**
     * Select only change logs with these user profile IDs.
     */
    userProfileIds?: string[];
}
export declare class DfareportingChangeLogsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    changeLogsListResponse?: shared.ChangeLogsListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
