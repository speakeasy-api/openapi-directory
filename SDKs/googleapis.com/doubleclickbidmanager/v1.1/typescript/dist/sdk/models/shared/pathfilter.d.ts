import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Indicates the position of the path the filter should match to (first, last, or any event in path).
 */
export declare enum PathFilterPathMatchPositionEnum {
    Any = "ANY",
    First = "FIRST",
    Last = "LAST"
}
/**
 * Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
 */
export declare class PathFilter extends SpeakeasyBase {
    /**
     * Filter on an event to be applied to some part of the path.
     */
    eventFilters?: EventFilter[];
    /**
     * Indicates the position of the path the filter should match to (first, last, or any event in path).
     */
    pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
