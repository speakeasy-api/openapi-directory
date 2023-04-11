import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentFilterClause } from "./segmentfilterclause";
/**
 * A list of segment filters in the `OR` group are combined with the logical OR operator.
 */
export declare class OrFiltersForSegment extends SpeakeasyBase {
    /**
     * List of segment filters to be combined with a `OR` operator.
     */
    segmentFilterClauses?: SegmentFilterClause[];
}
