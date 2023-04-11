import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
export declare enum GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum {
    ChangeHistoryResourceTypeUnspecified = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED",
    Account = "ACCOUNT",
    Property = "PROPERTY",
    FirebaseLink = "FIREBASE_LINK",
    GoogleAdsLink = "GOOGLE_ADS_LINK",
    GoogleSignalsSettings = "GOOGLE_SIGNALS_SETTINGS",
    ConversionEvent = "CONVERSION_EVENT",
    MeasurementProtocolSecret = "MEASUREMENT_PROTOCOL_SECRET",
    DataRetentionSettings = "DATA_RETENTION_SETTINGS",
    DisplayVideo360AdvertiserLink = "DISPLAY_VIDEO_360_ADVERTISER_LINK",
    DisplayVideo360AdvertiserLinkProposal = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL",
    DataStream = "DATA_STREAM",
    AttributionSettings = "ATTRIBUTION_SETTINGS"
}
/**
 * Request message for SearchChangeHistoryEvents RPC.
 */
export declare class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest extends SpeakeasyBase {
    /**
     * Optional. If set, only return changes that match one or more of these types of actions.
     */
    action?: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum[];
    /**
     * Optional. If set, only return changes if they are made by a user in this list.
     */
    actorEmail?: string[];
    /**
     * Optional. If set, only return changes made after this time (inclusive).
     */
    earliestChangeTime?: string;
    /**
     * Optional. If set, only return changes made before this time (inclusive).
     */
    latestChangeTime?: string;
    /**
     * Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.
     */
    property?: string;
    /**
     * Optional. If set, only return changes if they are for a resource that matches at least one of these types.
     */
    resourceType?: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum[];
}
