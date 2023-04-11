import { SpeakeasyBase } from "../../../internal/utils";
import { CashDrawerShiftSummary } from "./cashdrawershiftsummary";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class ListCashDrawerShiftsResponse extends SpeakeasyBase {
    /**
     * Opaque cursor for fetching the next page of results. Cursor is not
     *
     * @remarks
     * present in the last page of results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A collection of CashDrawerShiftSummary objects for shifts that match
     *
     * @remarks
     * the query.
     */
    items?: CashDrawerShiftSummary[];
}
