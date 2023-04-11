import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * A channel grouping defines a set of rules that can be used to categorize events in a path report.
 */
export declare class ChannelGrouping extends SpeakeasyBase {
    /**
     * The name to apply to an event that does not match any of the rules in the channel grouping.
     */
    fallbackName?: string;
    /**
     * Channel Grouping name.
     */
    name?: string;
    /**
     * Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping.
     */
    rules?: Rule[];
}
