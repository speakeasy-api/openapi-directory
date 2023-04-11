import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
/**
 * Filter events by date time range.
 */
export declare class LoyaltyEventDateTimeFilter extends SpeakeasyBase {
    /**
     * Represents a generic time range. The start and end values are
     *
     * @remarks
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    createdAt: TimeRange;
}
