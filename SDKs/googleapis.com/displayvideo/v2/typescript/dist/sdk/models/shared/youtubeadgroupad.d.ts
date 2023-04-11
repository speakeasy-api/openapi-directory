import { SpeakeasyBase } from "../../../internal/utils";
import { AdUrl } from "./adurl";
import { AudioAd } from "./audioad";
import { BumperAd } from "./bumperad";
import { DisplayVideoSourceAd } from "./displayvideosourcead";
import { InStreamAd } from "./instreamad";
import { MastheadAd } from "./mastheadad";
import { NonSkippableAd } from "./nonskippablead";
import { VideoDiscoveryAd } from "./videodiscoveryad";
import { VideoPerformanceAd } from "./videoperformancead";
/**
 * The entity status of the ad.
 */
export declare enum YoutubeAdGroupAdEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single ad associated with a YouTube ad group.
 */
export declare class YoutubeAdGroupAd extends SpeakeasyBase {
    /**
     * The unique ID of the ad. Assigned by the system.
     */
    adGroupAdId?: string;
    /**
     * The unique ID of the ad group that the ad belongs to.
     */
    adGroupId?: string;
    /**
     * List of URLs used by the ad.
     */
    adUrls?: AdUrl[];
    /**
     * The unique ID of the advertiser the ad belongs to.
     */
    advertiserId?: string;
    /**
     * Details for an audio ad.
     */
    audioAd?: AudioAd;
    /**
     * Details for a bumper ad.
     */
    bumperAd?: BumperAd;
    /**
     * The display name of the ad. Must be UTF-8 encoded with a maximum size of 255 bytes.
     */
    displayName?: string;
    /**
     * The ad sourced from a DV360 creative.
     */
    displayVideoSourceAd?: DisplayVideoSourceAd;
    /**
     * The entity status of the ad.
     */
    entityStatus?: YoutubeAdGroupAdEntityStatusEnum;
    /**
     * Details for an in-stream ad.
     */
    inStreamAd?: InStreamAd;
    /**
     * Details for a Masthead Ad.
     */
    mastheadAd?: MastheadAd;
    /**
     * The resource name of the ad.
     */
    name?: string;
    /**
     * Details for a non-skippable ad.
     */
    nonSkippableAd?: NonSkippableAd;
    /**
     * Details for a video discovery ad.
     */
    videoDiscoverAd?: VideoDiscoveryAd;
    /**
     * Details for a video performance ad.
     */
    videoPerformanceAd?: VideoPerformanceAd;
}
