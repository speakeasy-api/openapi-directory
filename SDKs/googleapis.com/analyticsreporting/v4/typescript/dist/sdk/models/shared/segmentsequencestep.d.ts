import { SpeakeasyBase } from "../../../internal/utils";
import { OrFiltersForSegment } from "./orfiltersforsegment";
/**
 * Specifies if the step immediately precedes or can be any time before the next step.
 */
export declare enum SegmentSequenceStepMatchTypeEnum {
    UnspecifiedMatchType = "UNSPECIFIED_MATCH_TYPE",
    Precedes = "PRECEDES",
    ImmediatelyPrecedes = "IMMEDIATELY_PRECEDES"
}
/**
 * A segment sequence definition.
 */
export declare class SegmentSequenceStep extends SpeakeasyBase {
    /**
     * Specifies if the step immediately precedes or can be any time before the next step.
     */
    matchType?: SegmentSequenceStepMatchTypeEnum;
    /**
     * A sequence is specified with a list of Or grouped filters which are combined with `AND` operator.
     */
    orFiltersForSegment?: OrFiltersForSegment[];
}
