import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals.
 */
export declare enum CreativeRequirementsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Display = "DISPLAY",
    Video = "VIDEO"
}
/**
 * Output only. Specifies the creative pre-approval policy.
 */
export declare enum CreativeRequirementsCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED",
    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}
/**
 * Output only. Specifies whether the creative is safeFrame compatible.
 */
export declare enum CreativeRequirementsCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer.
 */
export declare enum CreativeRequirementsProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Publisher = "PUBLISHER"
}
/**
 * Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives.
 */
export declare enum CreativeRequirementsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Skippable = "SKIPPABLE",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE",
    Any = "ANY"
}
/**
 * Message captures data about the creatives in the deal.
 */
export declare class CreativeRequirements extends SpeakeasyBase {
    /**
     * Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals.
     */
    creativeFormat?: CreativeRequirementsCreativeFormatEnum;
    /**
     * Output only. Specifies the creative pre-approval policy.
     */
    creativePreApprovalPolicy?: CreativeRequirementsCreativePreApprovalPolicyEnum;
    /**
     * Output only. Specifies whether the creative is safeFrame compatible.
     */
    creativeSafeFrameCompatibility?: CreativeRequirementsCreativeSafeFrameCompatibilityEnum;
    /**
     * Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives.
     */
    maxAdDurationMs?: string;
    /**
     * Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer.
     */
    programmaticCreativeSource?: CreativeRequirementsProgrammaticCreativeSourceEnum;
    /**
     * Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives.
     */
    skippableAdType?: CreativeRequirementsSkippableAdTypeEnum;
}
