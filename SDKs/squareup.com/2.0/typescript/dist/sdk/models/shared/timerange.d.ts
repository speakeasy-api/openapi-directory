import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a generic time range. The start and end values are
 *
 * @remarks
 * represented in RFC 3339 format. Time ranges are customized to be
 * inclusive or exclusive based on the needs of a particular endpoint.
 * Refer to the relevant endpoint-specific documentation to determine
 * how time ranges are handled.
 */
export declare class TimeRange extends SpeakeasyBase {
    /**
     * A datetime value in RFC 3339 format indicating when the time range
     *
     * @remarks
     * ends.
     */
    endAt?: string;
    /**
     * A datetime value in RFC 3339 format indicating when the time range
     *
     * @remarks
     * starts.
     */
    startAt?: string;
}
