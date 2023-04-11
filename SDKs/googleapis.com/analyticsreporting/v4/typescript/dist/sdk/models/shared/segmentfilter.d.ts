import { SpeakeasyBase } from "../../../internal/utils";
import { SequenceSegment } from "./sequencesegment";
import { SimpleSegment } from "./simplesegment";
/**
 * SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
 */
export declare class SegmentFilter extends SpeakeasyBase {
    /**
     * If true, match the complement of simple or sequence segment. For example, to match all visits not from "New York", we can define the segment as follows: "sessionSegment": { "segmentFilters": [{ "simpleSegment" :{ "orFiltersForSegment": [{ "segmentFilterClauses":[{ "dimensionFilter": { "dimensionName": "ga:city", "expressions": ["New York"] } }] }] }, "not": "True" }] },
     */
    not?: boolean;
    /**
     * Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
     */
    sequenceSegment?: SequenceSegment;
    /**
     * A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
     */
    simpleSegment?: SimpleSegment;
}
