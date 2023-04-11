import { SpeakeasyBase } from "../../../internal/utils";
import { BiddingStrategy } from "./biddingstrategy";
import { ConversionCountingConfig } from "./conversioncountingconfig";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { LineItemBudget, LineItemBudgetInput } from "./lineitembudget";
import { LineItemFlight } from "./lineitemflight";
import { MobileApp, MobileAppInput } from "./mobileapp";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PartnerRevenueModel } from "./partnerrevenuemodel";
import { TargetingExpansionConfig } from "./targetingexpansionconfig";
/**
 * Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.
 */
export declare enum LineItemEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * Required. Immutable. The type of the line item.
 */
export declare enum LineItemLineItemTypeEnum {
    LineItemTypeUnspecified = "LINE_ITEM_TYPE_UNSPECIFIED",
    LineItemTypeDisplayDefault = "LINE_ITEM_TYPE_DISPLAY_DEFAULT",
    LineItemTypeDisplayMobileAppInstall = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL",
    LineItemTypeVideoDefault = "LINE_ITEM_TYPE_VIDEO_DEFAULT",
    LineItemTypeVideoMobileAppInstall = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL",
    LineItemTypeDisplayMobileAppInventory = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY",
    LineItemTypeVideoMobileAppInventory = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY",
    LineItemTypeAudioDefault = "LINE_ITEM_TYPE_AUDIO_DEFAULT",
    LineItemTypeVideoOverTheTop = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"
}
/**
 * A single line item.
 */
export declare class LineItemInput extends SpeakeasyBase {
    /**
     * Settings that control the bid strategy. Bid strategy determines the bid price.
     */
    bidStrategy?: BiddingStrategy;
    /**
     * Settings that control how budget is allocated.
     */
    budget?: LineItemBudgetInput;
    /**
     * Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
     */
    conversionCounting?: ConversionCountingConfig;
    /**
     * The IDs of the creatives associated with the line item.
     */
    creativeIds?: string[];
    /**
     * Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.
     */
    entityStatus?: LineItemEntityStatusEnum;
    /**
     * Whether to exclude new exchanges from automatically being targeted by the line item. This field is false by default.
     */
    excludeNewExchanges?: boolean;
    /**
     * Settings that control the active duration of a line item.
     */
    flight?: LineItemFlight;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    frequencyCap?: FrequencyCap;
    /**
     * Required. Immutable. The unique ID of the insertion order that the line item belongs to.
     */
    insertionOrderId?: string;
    /**
     * Integration details of an entry.
     */
    integrationDetails?: IntegrationDetails;
    /**
     * The IDs of the private inventory sources assigned to the line item.
     */
    inventorySourceIds?: string[];
    /**
     * Required. Immutable. The type of the line item.
     */
    lineItemType?: LineItemLineItemTypeEnum;
    /**
     * A mobile app promoted by a mobile app install line item.
     */
    mobileApp?: MobileAppInput;
    /**
     * Settings that control the rate at which a budget is spent.
     */
    pacing?: Pacing;
    /**
     * The partner costs associated with the line item. If absent or empty in CreateLineItem method, the newly created line item will inherit partner costs from its parent insertion order.
     */
    partnerCosts?: PartnerCost[];
    /**
     * Settings that control how partner revenue is calculated.
     */
    partnerRevenueModel?: PartnerRevenueModel;
    /**
     * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning **March 25, 2023**, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by mid-April 2023.
     */
    targetingExpansion?: TargetingExpansionConfig;
}
/**
 * Output only. The reservation type of the line item.
 */
export declare enum LineItemReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED",
    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED",
    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED"
}
export declare enum LineItemWarningMessagesEnum {
    LineItemWarningMessageUnspecified = "LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED",
    InvalidFlightDates = "INVALID_FLIGHT_DATES",
    Expired = "EXPIRED",
    PendingFlight = "PENDING_FLIGHT",
    AllPartnerEnabledExchangesNegativelyTargeted = "ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED",
    InvalidInventorySource = "INVALID_INVENTORY_SOURCE",
    AppInventoryInvalidSiteTargeting = "APP_INVENTORY_INVALID_SITE_TARGETING",
    AppInventoryInvalidAudienceLists = "APP_INVENTORY_INVALID_AUDIENCE_LISTS",
    NoValidCreative = "NO_VALID_CREATIVE",
    ParentInsertionOrderPaused = "PARENT_INSERTION_ORDER_PAUSED",
    ParentInsertionOrderExpired = "PARENT_INSERTION_ORDER_EXPIRED",
    NoPositiveAudienceListTargeted = "NO_POSITIVE_AUDIENCE_LIST_TARGETED",
    AppInstallNoConversionPixel = "APP_INSTALL_NO_CONVERSION_PIXEL",
    TargetingRevokedOrClosedUserList = "TARGETING_REVOKED_OR_CLOSED_USER_LIST",
    AppInstallNoOptimalBiddingStrategy = "APP_INSTALL_NO_OPTIMAL_BIDDING_STRATEGY",
    CreativeSizeNotInUseForTargetedDeals = "CREATIVE_SIZE_NOT_IN_USE_FOR_TARGETED_DEALS",
    NoCreativeForTargetedDeals = "NO_CREATIVE_FOR_TARGETED_DEALS",
    TargetingDeprecatedGeoTarget = "TARGETING_DEPRECATED_GEO_TARGET",
    DeprecatedFirstPartyAudienceExclusion = "DEPRECATED_FIRST_PARTY_AUDIENCE_EXCLUSION"
}
/**
 * A single line item.
 */
export declare class LineItem extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the advertiser the line item belongs to.
     */
    advertiserId?: string;
    /**
     * Settings that control the bid strategy. Bid strategy determines the bid price.
     */
    bidStrategy?: BiddingStrategy;
    /**
     * Settings that control how budget is allocated.
     */
    budget?: LineItemBudget;
    /**
     * Output only. The unique ID of the campaign that the line item belongs to.
     */
    campaignId?: string;
    /**
     * Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
     */
    conversionCounting?: ConversionCountingConfig;
    /**
     * The IDs of the creatives associated with the line item.
     */
    creativeIds?: string[];
    /**
     * Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.
     */
    entityStatus?: LineItemEntityStatusEnum;
    /**
     * Whether to exclude new exchanges from automatically being targeted by the line item. This field is false by default.
     */
    excludeNewExchanges?: boolean;
    /**
     * Settings that control the active duration of a line item.
     */
    flight?: LineItemFlight;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    frequencyCap?: FrequencyCap;
    /**
     * Required. Immutable. The unique ID of the insertion order that the line item belongs to.
     */
    insertionOrderId?: string;
    /**
     * Integration details of an entry.
     */
    integrationDetails?: IntegrationDetails;
    /**
     * The IDs of the private inventory sources assigned to the line item.
     */
    inventorySourceIds?: string[];
    /**
     * Output only. The unique ID of the line item. Assigned by the system.
     */
    lineItemId?: string;
    /**
     * Required. Immutable. The type of the line item.
     */
    lineItemType?: LineItemLineItemTypeEnum;
    /**
     * A mobile app promoted by a mobile app install line item.
     */
    mobileApp?: MobileApp;
    /**
     * Output only. The resource name of the line item.
     */
    name?: string;
    /**
     * Settings that control the rate at which a budget is spent.
     */
    pacing?: Pacing;
    /**
     * The partner costs associated with the line item. If absent or empty in CreateLineItem method, the newly created line item will inherit partner costs from its parent insertion order.
     */
    partnerCosts?: PartnerCost[];
    /**
     * Settings that control how partner revenue is calculated.
     */
    partnerRevenueModel?: PartnerRevenueModel;
    /**
     * Output only. The reservation type of the line item.
     */
    reservationType?: LineItemReservationTypeEnum;
    /**
     * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning **March 25, 2023**, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by mid-April 2023.
     */
    targetingExpansion?: TargetingExpansionConfig;
    /**
     * Output only. The timestamp when the line item was last updated. Assigned by the system.
     */
    updateTime?: string;
    /**
     * Output only. The warning messages generated by the line item. These warnings do not block saving the line item, but some may block the line item from running.
     */
    warningMessages?: LineItemWarningMessagesEnum[];
}
