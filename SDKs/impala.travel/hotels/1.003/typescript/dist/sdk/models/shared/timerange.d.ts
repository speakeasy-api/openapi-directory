import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time range. Open-ended time ranges are indicated by omitting either `start` or `end` in the object.
 */
export declare class TimeRange extends SpeakeasyBase {
    /**
     * Time in ISO 8601 time format.
     */
    from?: string;
    /**
     * Time in ISO 8601 time format.
     */
    to?: string;
}
