import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
 */
export declare enum PathFilterPathMatchPositionEnum {
    PathMatchPositionUnspecified = "PATH_MATCH_POSITION_UNSPECIFIED",
    Any = "ANY",
    First = "FIRST",
    Last = "LAST"
}
/**
 * Represents a DfaReporting path filter.
 */
export declare class PathFilter extends SpeakeasyBase {
    /**
     * Event filters in path report.
     */
    eventFilters?: EventFilter[];
    /**
     * The kind of resource this is, in this case dfareporting#pathFilter.
     */
    kind?: string;
    /**
     * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
     */
    pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
