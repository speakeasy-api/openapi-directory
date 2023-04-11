import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyEventDateTimeFilter } from "./loyaltyeventdatetimefilter";
import { LoyaltyEventLocationFilter } from "./loyaltyeventlocationfilter";
import { LoyaltyEventLoyaltyAccountFilter } from "./loyaltyeventloyaltyaccountfilter";
import { LoyaltyEventOrderFilter } from "./loyaltyeventorderfilter";
import { LoyaltyEventTypeFilter } from "./loyaltyeventtypefilter";
/**
 * The filtering criteria. If the request specifies multiple filters,
 *
 * @remarks
 * the endpoint uses a logical AND to evaluate them.
 */
export declare class LoyaltyEventFilter extends SpeakeasyBase {
    /**
     * Filter events by date time range.
     */
    dateTimeFilter?: LoyaltyEventDateTimeFilter;
    /**
     * Filter events by location.
     */
    locationFilter?: LoyaltyEventLocationFilter;
    /**
     * Filter events by loyalty account.
     */
    loyaltyAccountFilter?: LoyaltyEventLoyaltyAccountFilter;
    /**
     * Filter events by the order associated with the event.
     */
    orderFilter?: LoyaltyEventOrderFilter;
    /**
     * Filter events by event type.
     */
    typeFilter?: LoyaltyEventTypeFilter;
}
