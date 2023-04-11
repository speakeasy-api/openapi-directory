import { SpeakeasyBase } from "../../../internal/utils";
import { ProductFeedData } from "./productfeeddata";
import { TargetingExpansionConfig } from "./targetingexpansionconfig";
import { YoutubeAndPartnersBiddingStrategy } from "./youtubeandpartnersbiddingstrategy";
/**
 * The format of the ads in the ad group.
 */
export declare enum YoutubeAdGroupAdGroupFormatEnum {
    YoutubeAndPartnersAdGroupFormatUnspecified = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_UNSPECIFIED",
    YoutubeAndPartnersAdGroupFormatInStream = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM",
    YoutubeAndPartnersAdGroupFormatVideoDiscovery = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_VIDEO_DISCOVERY",
    YoutubeAndPartnersAdGroupFormatBumper = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_BUMPER",
    YoutubeAndPartnersAdGroupFormatNonSkippableInStream = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_NON_SKIPPABLE_IN_STREAM",
    YoutubeAndPartnersAdGroupFormatAudio = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_AUDIO",
    YoutubeAndPartnersAdGroupFormatAction = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_ACTION",
    YoutubeAndPartnersAdGroupFormatReach = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_REACH",
    YoutubeAndPartnersAdGroupFormatMasthead = "YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_MASTHEAD"
}
/**
 * Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group's parent line item is not active, the ad group can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.
 */
export declare enum YoutubeAdGroupEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single YouTube ad group associated with a YouTube and Partners line item.
 */
export declare class YoutubeAdGroup extends SpeakeasyBase {
    /**
     * The format of the ads in the ad group.
     */
    adGroupFormat?: YoutubeAdGroupAdGroupFormatEnum;
    /**
     * The unique ID of the ad group. Assigned by the system.
     */
    adGroupId?: string;
    /**
     * The unique ID of the advertiser the ad group belongs to.
     */
    advertiserId?: string;
    /**
     * Settings that control the bid strategy for YouTube and Partners resources.
     */
    biddingStrategy?: YoutubeAndPartnersBiddingStrategy;
    /**
     * The display name of the ad group. Must be UTF-8 encoded with a maximum size of 255 bytes.
     */
    displayName?: string;
    /**
     * Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group's parent line item is not active, the ad group can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.
     */
    entityStatus?: YoutubeAdGroupEntityStatusEnum;
    /**
     * The unique ID of the line item that the ad group belongs to.
     */
    lineItemId?: string;
    /**
     * The resource name of the ad group.
     */
    name?: string;
    /**
     * The details of product feed.
     */
    productFeedData?: ProductFeedData;
    /**
     * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning **March 25, 2023**, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by mid-April 2023.
     */
    targetingExpansion?: TargetingExpansionConfig;
    /**
     * The IDs of the youtube_ad_group_ad resources associated with the ad group.
     */
    youtubeAdIds?: string[];
}
