import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";
/**
 * A response containing the resulting loyalty event.
 */
export declare class AccumulateLoyaltyPointsResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Provides information about a loyalty event.
     *
     * @remarks
     * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
     */
    event?: LoyaltyEvent;
}
