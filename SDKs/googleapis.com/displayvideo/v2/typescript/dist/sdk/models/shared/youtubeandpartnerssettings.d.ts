import { SpeakeasyBase } from "../../../internal/utils";
import { FrequencyCap } from "./frequencycap";
import { TargetFrequency } from "./targetfrequency";
import { VideoAdSequenceSettings } from "./videoadsequencesettings";
import { YoutubeAndPartnersBiddingStrategy, YoutubeAndPartnersBiddingStrategyInput } from "./youtubeandpartnersbiddingstrategy";
import { YoutubeAndPartnersInventorySourceConfig } from "./youtubeandpartnersinventorysourceconfig";
import { YoutubeAndPartnersThirdPartyMeasurementSettings } from "./youtubeandpartnersthirdpartymeasurementsettings";
/**
 * The kind of content on which the YouTube and Partners ads will be shown.
 */
export declare enum YoutubeAndPartnersSettingsContentCategoryEnum {
    YoutubeAndPartnersContentCategoryUnspecified = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED",
    YoutubeAndPartnersContentCategoryStandard = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD",
    YoutubeAndPartnersContentCategoryExpanded = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED",
    YoutubeAndPartnersContentCategoryLimited = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"
}
/**
 * Settings for YouTube and Partners line items.
 */
export declare class YoutubeAndPartnersSettingsInput extends SpeakeasyBase {
    /**
     * Settings that control the bid strategy for YouTube and Partners resources.
     */
    biddingStrategy?: YoutubeAndPartnersBiddingStrategyInput;
    /**
     * The kind of content on which the YouTube and Partners ads will be shown.
     */
    contentCategory?: YoutubeAndPartnersSettingsContentCategoryEnum;
    /**
     * Settings that control what YouTube related inventories the YouTube and Partners line item will target.
     */
    inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig;
    /**
     * The ID of the form to generate leads.
     */
    leadFormId?: string;
    /**
     * The ID of the merchant which is linked to the line item for product feed.
     */
    linkedMerchantId?: string;
    /**
     * The IDs of the videos appear below the primary video ad when the ad is playing in the YouTube app on mobile devices.
     */
    relatedVideoIds?: string[];
    /**
     * Setting that controls the average number of times the ads will show to the same person over a certain period of time.
     */
    targetFrequency?: TargetFrequency;
    /**
     * Settings that control what third-party vendors are measuring specific line item metrics.
     */
    thirdPartyMeasurementSettings?: YoutubeAndPartnersThirdPartyMeasurementSettings;
    /**
     * Settings related to VideoAdSequence.
     */
    videoAdSequenceSettings?: VideoAdSequenceSettings;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    viewFrequencyCap?: FrequencyCap;
}
/**
 * Settings for YouTube and Partners line items.
 */
export declare class YoutubeAndPartnersSettings extends SpeakeasyBase {
    /**
     * Settings that control the bid strategy for YouTube and Partners resources.
     */
    biddingStrategy?: YoutubeAndPartnersBiddingStrategy;
    /**
     * The kind of content on which the YouTube and Partners ads will be shown.
     */
    contentCategory?: YoutubeAndPartnersSettingsContentCategoryEnum;
    /**
     * Settings that control what YouTube related inventories the YouTube and Partners line item will target.
     */
    inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig;
    /**
     * The ID of the form to generate leads.
     */
    leadFormId?: string;
    /**
     * The ID of the merchant which is linked to the line item for product feed.
     */
    linkedMerchantId?: string;
    /**
     * The IDs of the videos appear below the primary video ad when the ad is playing in the YouTube app on mobile devices.
     */
    relatedVideoIds?: string[];
    /**
     * Setting that controls the average number of times the ads will show to the same person over a certain period of time.
     */
    targetFrequency?: TargetFrequency;
    /**
     * Settings that control what third-party vendors are measuring specific line item metrics.
     */
    thirdPartyMeasurementSettings?: YoutubeAndPartnersThirdPartyMeasurementSettings;
    /**
     * Settings related to VideoAdSequence.
     */
    videoAdSequenceSettings?: VideoAdSequenceSettings;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    viewFrequencyCap?: FrequencyCap;
}
