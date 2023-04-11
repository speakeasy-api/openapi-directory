import { SpeakeasyBase } from "../../../internal/utils";
import { WafExpressionSetExpression } from "./wafexpressionsetexpression";
export declare class WafExpressionSet extends SpeakeasyBase {
    /**
     * A list of alternate IDs. The format should be: - E.g. XSS-stable Generic suffix like "stable" is particularly useful if a policy likes to avail newer set of expressions without having to change the policy. A given alias name can't be used for more than one entity set.
     */
    aliases?: string[];
    /**
     * List of available expressions.
     */
    expressions?: WafExpressionSetExpression[];
    /**
     * Google specified expression set ID. The format should be: - E.g. XSS-20170329 required
     */
    id?: string;
}
