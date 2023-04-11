import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeSpecification } from "./creativespecification";
/**
 * The format of the environment that the creatives will be displayed in.
 */
export declare enum CreativeRestrictionsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Display = "DISPLAY",
    Video = "VIDEO"
}
/**
 * Skippable video ads allow viewers to skip ads after 5 seconds.
 */
export declare enum CreativeRestrictionsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Skippable = "SKIPPABLE",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE"
}
/**
 * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
 */
export declare class CreativeRestrictions extends SpeakeasyBase {
    /**
     * The format of the environment that the creatives will be displayed in.
     */
    creativeFormat?: CreativeRestrictionsCreativeFormatEnum;
    creativeSpecifications?: CreativeSpecification[];
    /**
     * Skippable video ads allow viewers to skip ads after 5 seconds.
     */
    skippableAdType?: CreativeRestrictionsSkippableAdTypeEnum;
}
