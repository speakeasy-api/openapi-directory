import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelGrouping } from "./channelgrouping";
import { PathFilter } from "./pathfilter";
/**
 * Path Query Options for Report Options.
 */
export declare class PathQueryOptions extends SpeakeasyBase {
    /**
     * A channel grouping defines a set of rules that can be used to categorize events in a path report.
     */
    channelGrouping?: ChannelGrouping;
    /**
     * Path Filters. There is a limit of 100 path filters that can be set per report.
     */
    pathFilters?: PathFilter[];
}
