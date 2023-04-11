import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
 */
export declare class ConsolidationStrategy extends SpeakeasyBase {
    /**
     * A strategy that consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action.
     */
    legacy?: Record<string, any>;
    /**
     * A strategy that does no consolidation of individual activities.
     */
    none?: Record<string, any>;
}
