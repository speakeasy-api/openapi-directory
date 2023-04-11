import { SpeakeasyBase } from "../../../internal/utils";
import { CashDrawerShiftEvent } from "./cashdrawershiftevent";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class ListCashDrawerShiftEventsResponse extends SpeakeasyBase {
    /**
     * Opaque cursor for fetching the next page. Cursor is not present in
     *
     * @remarks
     * the last page of results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * All of the events (payments, refunds, etc.) for a cash drawer during
     *
     * @remarks
     * the shift.
     */
    events?: CashDrawerShiftEvent[];
}
