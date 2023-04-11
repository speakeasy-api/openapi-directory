import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentFilter } from "./segmentfilter";
/**
 * SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
 */
export declare class SegmentDefinition extends SpeakeasyBase {
    /**
     * A segment is defined by a set of segment filters which are combined together with a logical `AND` operation.
     */
    segmentFilters?: SegmentFilter[];
}
