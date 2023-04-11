import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time range.
 */
export declare class TimeRange extends SpeakeasyBase {
    /**
     * Required. The upper bound of a time range, inclusive.
     */
    endTime?: string;
    /**
     * Required. The lower bound of a time range, inclusive.
     */
    startTime?: string;
}
