import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An interval of time, with an absolute start and end.
 */
export declare class TimeInterval extends SpeakeasyBase {
    /**
     * The timestamp marking the end of the range (exclusive) for which data is included.
     */
    endTime?: string;
    /**
     * The timestamp marking the start of the range (inclusive) for which data is included.
     */
    startTime?: string;
}
