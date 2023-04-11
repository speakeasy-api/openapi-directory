import { SpeakeasyBase } from "../../../internal/utils";
import { OrFiltersForSegment } from "./orfiltersforsegment";
/**
 * A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
 */
export declare class SimpleSegment extends SpeakeasyBase {
    /**
     * A list of segment filters groups which are combined with logical `AND` operator.
     */
    orFiltersForSegment?: OrFiltersForSegment[];
}
