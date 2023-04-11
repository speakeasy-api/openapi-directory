import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operand of webpage targeting condition.
 */
export declare enum GoogleAdsSearchads360V0CommonWebpageConditionInfoOperandEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Url = "URL",
    Category = "CATEGORY",
    PageTitle = "PAGE_TITLE",
    PageContent = "PAGE_CONTENT",
    CustomLabel = "CUSTOM_LABEL"
}
/**
 * Operator of webpage targeting condition.
 */
export declare enum GoogleAdsSearchads360V0CommonWebpageConditionInfoOperatorEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Equals = "EQUALS",
    Contains = "CONTAINS"
}
/**
 * Logical expression for targeting webpages of an advertiser's website.
 */
export declare class GoogleAdsSearchads360V0CommonWebpageConditionInfo extends SpeakeasyBase {
    /**
     * Argument of webpage targeting condition.
     */
    argument?: string;
    /**
     * Operand of webpage targeting condition.
     */
    operand?: GoogleAdsSearchads360V0CommonWebpageConditionInfoOperandEnum;
    /**
     * Operator of webpage targeting condition.
     */
    operator?: GoogleAdsSearchads360V0CommonWebpageConditionInfoOperatorEnum;
}
