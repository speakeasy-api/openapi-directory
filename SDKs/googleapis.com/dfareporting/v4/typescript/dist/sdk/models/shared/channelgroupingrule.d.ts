import { SpeakeasyBase } from "../../../internal/utils";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";
/**
 * Represents a DfaReporting channel grouping rule.
 */
export declare class ChannelGroupingRule extends SpeakeasyBase {
    /**
     * The disjunctive match statements contained within this rule.
     */
    disjunctiveMatchStatements?: DisjunctiveMatchStatement[];
    /**
     * The kind of resource this is, in this case dfareporting#channelGroupingRule.
     */
    kind?: string;
    /**
     * Rule name.
     */
    name?: string;
}
