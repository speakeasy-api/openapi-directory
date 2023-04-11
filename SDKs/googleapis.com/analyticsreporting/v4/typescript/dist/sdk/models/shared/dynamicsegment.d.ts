import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDefinition } from "./segmentdefinition";
/**
 * Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
 */
export declare class DynamicSegment extends SpeakeasyBase {
    /**
     * The name of the dynamic segment.
     */
    name?: string;
    /**
     * SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
     */
    sessionSegment?: SegmentDefinition;
    /**
     * SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
     */
    userSegment?: SegmentDefinition;
}
