import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicSegment } from "./dynamicsegment";
/**
 * The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.
 */
export declare class Segment extends SpeakeasyBase {
    /**
     * Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
     */
    dynamicSegment?: DynamicSegment;
    /**
     * The segment ID of a built-in or custom segment, for example `gaid::-3`.
     */
    segmentId?: string;
}
