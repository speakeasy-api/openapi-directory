import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message representing a period of time between two timestamps.
 */
export declare class TimestampRange extends SpeakeasyBase {
    /**
     * End of the period.
     */
    endTime?: string;
    /**
     * Begin of the period.
     */
    startTime?: string;
}
