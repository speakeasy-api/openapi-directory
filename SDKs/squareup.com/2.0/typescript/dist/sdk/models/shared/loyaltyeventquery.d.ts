import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyEventFilter } from "./loyaltyeventfilter";
/**
 * Represents a query used to search for loyalty events.
 */
export declare class LoyaltyEventQuery extends SpeakeasyBase {
    /**
     * The filtering criteria. If the request specifies multiple filters,
     *
     * @remarks
     * the endpoint uses a logical AND to evaluate them.
     */
    filter?: LoyaltyEventFilter;
}
