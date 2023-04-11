import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The condition under which query expansion should occur. Default to Condition.DISABLED.
 */
export declare enum GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED",
    Disabled = "DISABLED",
    Auto = "AUTO"
}
/**
 * Specification to determine under which conditions query expansion should occur.
 */
export declare class GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec extends SpeakeasyBase {
    /**
     * The condition under which query expansion should occur. Default to Condition.DISABLED.
     */
    condition?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum;
    /**
     * Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.
     */
    pinUnexpandedResults?: boolean;
}
