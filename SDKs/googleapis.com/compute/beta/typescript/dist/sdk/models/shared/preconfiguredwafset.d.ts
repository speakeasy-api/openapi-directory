import { SpeakeasyBase } from "../../../internal/utils";
import { WafExpressionSet } from "./wafexpressionset";
export declare class PreconfiguredWafSet extends SpeakeasyBase {
    /**
     * List of entities that are currently supported for WAF rules.
     */
    expressionSets?: WafExpressionSet[];
}
