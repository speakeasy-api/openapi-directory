import { SpeakeasyBase } from "../../../internal/utils";
import { ShiftQuery } from "./shiftquery";
/**
 * A request for a filtered and sorted set of `Shift` objects.
 */
export declare class SearchShiftsRequest extends SpeakeasyBase {
    /**
     * An opaque cursor for fetching the next page.
     */
    cursor?: string;
    /**
     * The number of resources in a page (200 by default).
     */
    limit?: number;
    /**
     * The parameters of a `Shift` search query, which includes filter and sort options.
     */
    query?: ShiftQuery;
}
