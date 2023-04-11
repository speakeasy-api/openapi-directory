import { SpeakeasyBase } from "../../../internal/utils";
import { AssetAssociation } from "./assetassociation";
import { AudioVideoOffset } from "./audiovideooffset";
import { CmTrackingAd } from "./cmtrackingad";
import { CounterEvent } from "./counterevent";
import { Dimensions } from "./dimensions";
import { ExitEvent } from "./exitevent";
import { ObaIcon } from "./obaicon";
import { ReviewStatusInfo } from "./reviewstatusinfo";
import { ThirdPartyUrl } from "./thirdpartyurl";
import { TimerEvent } from "./timerevent";
import { Transcode } from "./transcode";
import { UniversalAdId } from "./universaladid";
/**
 * Required. Immutable. The type of the creative.
 */
export declare enum CreativeCreativeTypeEnum {
    CreativeTypeUnspecified = "CREATIVE_TYPE_UNSPECIFIED",
    CreativeTypeStandard = "CREATIVE_TYPE_STANDARD",
    CreativeTypeExpandable = "CREATIVE_TYPE_EXPANDABLE",
    CreativeTypeVideo = "CREATIVE_TYPE_VIDEO",
    CreativeTypeNative = "CREATIVE_TYPE_NATIVE",
    CreativeTypeTemplatedAppInstall = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL",
    CreativeTypeNativeSiteSquare = "CREATIVE_TYPE_NATIVE_SITE_SQUARE",
    CreativeTypeTemplatedAppInstallInterstitial = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL",
    CreativeTypeLightbox = "CREATIVE_TYPE_LIGHTBOX",
    CreativeTypeNativeAppInstall = "CREATIVE_TYPE_NATIVE_APP_INSTALL",
    CreativeTypeNativeAppInstallSquare = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE",
    CreativeTypeAudio = "CREATIVE_TYPE_AUDIO",
    CreativeTypePublisherHosted = "CREATIVE_TYPE_PUBLISHER_HOSTED",
    CreativeTypeNativeVideo = "CREATIVE_TYPE_NATIVE_VIDEO",
    CreativeTypeTemplatedAppInstallVideo = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
}
/**
 * Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED`
 */
export declare enum CreativeEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`
 */
export declare enum CreativeExpandingDirectionEnum {
    ExpandingDirectionUnspecified = "EXPANDING_DIRECTION_UNSPECIFIED",
    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE",
    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP",
    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN",
    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT",
    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT",
    ExpandingDirectionUpAndLeft = "EXPANDING_DIRECTION_UP_AND_LEFT",
    ExpandingDirectionUpAndRight = "EXPANDING_DIRECTION_UP_AND_RIGHT",
    ExpandingDirectionDownAndLeft = "EXPANDING_DIRECTION_DOWN_AND_LEFT",
    ExpandingDirectionDownAndRight = "EXPANDING_DIRECTION_DOWN_AND_RIGHT",
    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN",
    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT",
    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL"
}
/**
 * Required. Indicates where the creative is hosted.
 */
export declare enum CreativeHostingSourceEnum {
    HostingSourceUnspecified = "HOSTING_SOURCE_UNSPECIFIED",
    HostingSourceCm = "HOSTING_SOURCE_CM",
    HostingSourceThirdParty = "HOSTING_SOURCE_THIRD_PARTY",
    HostingSourceHosted = "HOSTING_SOURCE_HOSTED",
    HostingSourceRichMedia = "HOSTING_SOURCE_RICH_MEDIA"
}
/**
 * A single Creative.
 */
export declare class CreativeInput extends SpeakeasyBase {
    /**
     * Additional dimensions. Applicable when creative_type is one of: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_TEMPLATED_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_LIGHTBOX` * `CREATIVE_TYPE_NATIVE_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE` * `CREATIVE_TYPE_PUBLISHER_HOSTED` If this field is specified, width_pixels and height_pixels are both required and must be greater than or equal to 0.
     */
    additionalDimensions?: Dimensions[];
    /**
     * Third-party HTML tracking tag to be appended to the creative tag.
     */
    appendedTag?: string;
    /**
     * Required. Assets associated to this creative. Assets can be associated to the creative in one of following roles: * `ASSET_ROLE_UNSPECIFIED` * `ASSET_ROLE_MAIN` * `ASSET_ROLE_BACKUP` * `ASSET_ROLE_POLITE_LOAD`
     */
    assets?: AssetAssociation[];
    /**
     * A Campaign Manager 360 tracking ad.
     */
    cmTrackingAd?: CmTrackingAd;
    /**
     * The IDs of companion creatives for a video creative. You can assign existing display creatives (with image or HTML5 assets) to serve surrounding the publisher's video player. Companions display around the video player while the video is playing and remain after the video has completed. Creatives contain additional dimensions can not be companion creatives. This field is only supported for following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`
     */
    companionCreativeIds?: string[];
    /**
     * Counter events for a rich media creative. Counters track the number of times that a user interacts with any part of a rich media creative in a specified way (mouse-overs, mouse-outs, clicks, taps, data loading, keyboard entries, etc.). Any event that can be captured in the creative can be recorded as a counter. Leave it empty or unset for creatives containing image assets only.
     */
    counterEvents?: CounterEvent[];
    /**
     * Required. Immutable. The type of the creative.
     */
    creativeType?: CreativeCreativeTypeEnum;
    /**
     * Dimensions.
     */
    dimensions?: Dimensions;
    /**
     * Required. The display name of the creative. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED`
     */
    entityStatus?: CreativeEntityStatusEnum;
    /**
     * Required. Exit events for this creative. An exit (also known as a click tag) is any area in your creative that someone can click or tap to open an advertiser's landing page. Every creative must include at least one exit. You can add an exit to your creative in any of the following ways: * Use Google Web Designer's tap area. * Define a JavaScript variable called "clickTag". * Use the Enabler (Enabler.exit()) to track exits in rich media formats.
     */
    exitEvents?: ExitEvent[];
    /**
     * Optional. Indicates the creative will automatically expand on hover. Optional and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`
     */
    expandOnHover?: boolean;
    /**
     * Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`
     */
    expandingDirection?: CreativeExpandingDirectionEnum;
    /**
     * Required. Indicates where the creative is hosted.
     */
    hostingSource?: CreativeHostingSourceEnum;
    /**
     * Indicates whether Integral Ad Science (IAS) campaign monitoring is enabled. To enable this for the creative, make sure the Advertiser.creative_config.ias_client_id has been set to your IAS client ID.
     */
    iasCampaignMonitoring?: boolean;
    /**
     * ID information used to link this creative to an external system. Must be UTF-8 encoded with a length of no more than 10,000 characters.
     */
    integrationCode?: string;
    /**
     * JavaScript measurement URL from supported third-party verification providers (ComScore, DoubleVerify, IAS, Moat). HTML script tags are not supported. This field is only supported in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`
     */
    jsTrackerUrl?: string;
    /**
     * User notes for this creative. Must be UTF-8 encoded with a length of no more than 20,000 characters.
     */
    notes?: string;
    /**
     * OBA Icon for a Creative
     */
    obaIcon?: ObaIcon;
    /**
     * The length an audio or a video has been played.
     */
    progressOffset?: AudioVideoOffset;
    /**
     * Optional. Indicates that the creative relies on HTML5 to render properly. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`
     */
    requireHtml5?: boolean;
    /**
     * Optional. Indicates that the creative requires MRAID (Mobile Rich Media Ad Interface Definitions system). Set this if the creative relies on mobile gestures for interactivity, such as swiping or tapping. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`
     */
    requireMraid?: boolean;
    /**
     * Optional. Indicates that the creative will wait for a return ping for attribution. Only valid when using a Campaign Manager 360 tracking ad with a third-party ad server parameter and the ${DC_DBM_TOKEN} macro. Optional and only valid for third-party tag creatives or third-party VAST tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`
     */
    requirePingForAttribution?: boolean;
    /**
     * Review statuses for the creative.
     */
    reviewStatus?: ReviewStatusInfo;
    /**
     * The length an audio or a video has been played.
     */
    skipOffset?: AudioVideoOffset;
    /**
     * Whether the user can choose to skip a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO`
     */
    skippable?: boolean;
    /**
     * Optional. The original third-party tag used for the creative. Required and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`
     */
    thirdPartyTag?: string;
    /**
     * Tracking URLs from third parties to track interactions with a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO`
     */
    thirdPartyUrls?: ThirdPartyUrl[];
    /**
     * Timer custom events for a rich media creative. Timers track the time during which a user views and interacts with a specified part of a rich media creative. A creative can have multiple timer events, each timed independently. Leave it empty or unset for creatives containing image assets only.
     */
    timerEvents?: TimerEvent[];
    /**
     * Tracking URLs for analytics providers or third-party ad technology vendors. The URLs must start with https (except on inventory that doesn't require SSL compliance). If using macros in your URL, use only macros supported by Display & Video 360. Standard URLs only, no IMG or SCRIPT tags. This field is only supported in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`
     */
    trackerUrls?: string[];
    /**
     * A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.
     */
    universalAdId?: UniversalAdId;
    /**
     * Optional. The URL of the VAST tag for a third-party VAST tag creative. Required and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`
     */
    vastTagUrl?: string;
}
export declare enum CreativeCreativeAttributesEnum {
    CreativeAttributeUnspecified = "CREATIVE_ATTRIBUTE_UNSPECIFIED",
    CreativeAttributeVast = "CREATIVE_ATTRIBUTE_VAST",
    CreativeAttributeVpaidLinear = "CREATIVE_ATTRIBUTE_VPAID_LINEAR",
    CreativeAttributeVpaidNonLinear = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"
}
/**
 * A single Creative.
 */
export declare class Creative extends SpeakeasyBase {
    /**
     * Additional dimensions. Applicable when creative_type is one of: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_TEMPLATED_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_LIGHTBOX` * `CREATIVE_TYPE_NATIVE_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE` * `CREATIVE_TYPE_PUBLISHER_HOSTED` If this field is specified, width_pixels and height_pixels are both required and must be greater than or equal to 0.
     */
    additionalDimensions?: Dimensions[];
    /**
     * Output only. The unique ID of the advertiser the creative belongs to.
     */
    advertiserId?: string;
    /**
     * Third-party HTML tracking tag to be appended to the creative tag.
     */
    appendedTag?: string;
    /**
     * Required. Assets associated to this creative. Assets can be associated to the creative in one of following roles: * `ASSET_ROLE_UNSPECIFIED` * `ASSET_ROLE_MAIN` * `ASSET_ROLE_BACKUP` * `ASSET_ROLE_POLITE_LOAD`
     */
    assets?: AssetAssociation[];
    /**
     * Output only. The unique ID of the Campaign Manager 360 placement associated with the creative. This field is only applicable for creatives that are synced from Campaign Manager.
     */
    cmPlacementId?: string;
    /**
     * A Campaign Manager 360 tracking ad.
     */
    cmTrackingAd?: CmTrackingAd;
    /**
     * The IDs of companion creatives for a video creative. You can assign existing display creatives (with image or HTML5 assets) to serve surrounding the publisher's video player. Companions display around the video player while the video is playing and remain after the video has completed. Creatives contain additional dimensions can not be companion creatives. This field is only supported for following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`
     */
    companionCreativeIds?: string[];
    /**
     * Counter events for a rich media creative. Counters track the number of times that a user interacts with any part of a rich media creative in a specified way (mouse-overs, mouse-outs, clicks, taps, data loading, keyboard entries, etc.). Any event that can be captured in the creative can be recorded as a counter. Leave it empty or unset for creatives containing image assets only.
     */
    counterEvents?: CounterEvent[];
    /**
     * Output only. The timestamp when the creative was created. Assigned by the system.
     */
    createTime?: string;
    /**
     * Output only. A list of attributes of the creative that is generated by the system.
     */
    creativeAttributes?: CreativeCreativeAttributesEnum[];
    /**
     * Output only. The unique ID of the creative. Assigned by the system.
     */
    creativeId?: string;
    /**
     * Required. Immutable. The type of the creative.
     */
    creativeType?: CreativeCreativeTypeEnum;
    /**
     * Dimensions.
     */
    dimensions?: Dimensions;
    /**
     * Required. The display name of the creative. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Output only. Indicates whether the creative is dynamic.
     */
    dynamic?: boolean;
    /**
     * Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED`
     */
    entityStatus?: CreativeEntityStatusEnum;
    /**
     * Required. Exit events for this creative. An exit (also known as a click tag) is any area in your creative that someone can click or tap to open an advertiser's landing page. Every creative must include at least one exit. You can add an exit to your creative in any of the following ways: * Use Google Web Designer's tap area. * Define a JavaScript variable called "clickTag". * Use the Enabler (Enabler.exit()) to track exits in rich media formats.
     */
    exitEvents?: ExitEvent[];
    /**
     * Optional. Indicates the creative will automatically expand on hover. Optional and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`
     */
    expandOnHover?: boolean;
    /**
     * Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`
     */
    expandingDirection?: CreativeExpandingDirectionEnum;
    /**
     * Required. Indicates where the creative is hosted.
     */
    hostingSource?: CreativeHostingSourceEnum;
    /**
     * Output only. Indicates the third-party VAST tag creative requires HTML5 Video support. Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO`
     */
    html5Video?: boolean;
    /**
     * Indicates whether Integral Ad Science (IAS) campaign monitoring is enabled. To enable this for the creative, make sure the Advertiser.creative_config.ias_client_id has been set to your IAS client ID.
     */
    iasCampaignMonitoring?: boolean;
    /**
     * ID information used to link this creative to an external system. Must be UTF-8 encoded with a length of no more than 10,000 characters.
     */
    integrationCode?: string;
    /**
     * JavaScript measurement URL from supported third-party verification providers (ComScore, DoubleVerify, IAS, Moat). HTML script tags are not supported. This field is only supported in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`
     */
    jsTrackerUrl?: string;
    /**
     * Output only. The IDs of the line items this creative is associated with. To associate a creative to a line item, use LineItem.creative_ids instead.
     */
    lineItemIds?: string[];
    /**
     * Output only. Media duration of the creative. Applicable when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_PUBLISHER_HOSTED`
     */
    mediaDuration?: string;
    /**
     * Output only. Indicates the third-party audio creative supports MP3. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO`
     */
    mp3Audio?: boolean;
    /**
     * Output only. The resource name of the creative.
     */
    name?: string;
    /**
     * User notes for this creative. Must be UTF-8 encoded with a length of no more than 20,000 characters.
     */
    notes?: string;
    /**
     * OBA Icon for a Creative
     */
    obaIcon?: ObaIcon;
    /**
     * Output only. Indicates the third-party audio creative supports OGG. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO`
     */
    oggAudio?: boolean;
    /**
     * The length an audio or a video has been played.
     */
    progressOffset?: AudioVideoOffset;
    /**
     * Optional. Indicates that the creative relies on HTML5 to render properly. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`
     */
    requireHtml5?: boolean;
    /**
     * Optional. Indicates that the creative requires MRAID (Mobile Rich Media Ad Interface Definitions system). Set this if the creative relies on mobile gestures for interactivity, such as swiping or tapping. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`
     */
    requireMraid?: boolean;
    /**
     * Optional. Indicates that the creative will wait for a return ping for attribution. Only valid when using a Campaign Manager 360 tracking ad with a third-party ad server parameter and the ${DC_DBM_TOKEN} macro. Optional and only valid for third-party tag creatives or third-party VAST tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`
     */
    requirePingForAttribution?: boolean;
    /**
     * Review statuses for the creative.
     */
    reviewStatus?: ReviewStatusInfo;
    /**
     * The length an audio or a video has been played.
     */
    skipOffset?: AudioVideoOffset;
    /**
     * Whether the user can choose to skip a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO`
     */
    skippable?: boolean;
    /**
     * Optional. The original third-party tag used for the creative. Required and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`
     */
    thirdPartyTag?: string;
    /**
     * Tracking URLs from third parties to track interactions with a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO`
     */
    thirdPartyUrls?: ThirdPartyUrl[];
    /**
     * Timer custom events for a rich media creative. Timers track the time during which a user views and interacts with a specified part of a rich media creative. A creative can have multiple timer events, each timed independently. Leave it empty or unset for creatives containing image assets only.
     */
    timerEvents?: TimerEvent[];
    /**
     * Tracking URLs for analytics providers or third-party ad technology vendors. The URLs must start with https (except on inventory that doesn't require SSL compliance). If using macros in your URL, use only macros supported by Display & Video 360. Standard URLs only, no IMG or SCRIPT tags. This field is only supported in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_APP_INSTALL` * `CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`
     */
    trackerUrls?: string[];
    /**
     * Output only. Audio/Video transcodes. Display & Video 360 transcodes the main asset into a number of alternative versions that use different file formats or have different properties (resolution, audio bit rate, and video bit rate), each designed for specific video players or bandwidths. These transcodes give a publisher's system more options to choose from for each impression on your video and ensures that the appropriate file serves based on the viewer’s connection and screen size. This field is only supported in following creative_type: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_AUDIO`
     */
    transcodes?: Transcode[];
    /**
     * A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.
     */
    universalAdId?: UniversalAdId;
    /**
     * Output only. The timestamp when the creative was last updated, either by the user or system (e.g. creative review). Assigned by the system.
     */
    updateTime?: string;
    /**
     * Optional. The URL of the VAST tag for a third-party VAST tag creative. Required and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`
     */
    vastTagUrl?: string;
    /**
     * Output only. Indicates the third-party VAST tag creative requires VPAID (Digital Video Player-Ad Interface). Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO`
     */
    vpaid?: boolean;
}
