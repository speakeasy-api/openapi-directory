import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0CommonWebpageConditionInfo } from "./googleadssearchads360v0commonwebpageconditioninfo";
/**
 * Represents a criterion for targeting webpages of an advertiser's website.
 */
export declare class GoogleAdsSearchads360V0CommonWebpageInfo extends SpeakeasyBase {
    /**
     * Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign's website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    conditions?: GoogleAdsSearchads360V0CommonWebpageConditionInfo[];
    /**
     * Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only.
     */
    coveragePercentage?: number;
    /**
     * The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.
     */
    criterionName?: string;
}
