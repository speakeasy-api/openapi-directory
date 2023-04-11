import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyEventAccumulatePoints } from "./loyaltyeventaccumulatepoints";
/**
 * A request to accumulate points for a purchase.
 */
export declare class AccumulateLoyaltyPointsRequest extends SpeakeasyBase {
    /**
     * Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
     */
    accumulatePoints: LoyaltyEventAccumulatePoints;
    /**
     * A unique string that identifies the `AccumulateLoyaltyPoints` request.
     *
     * @remarks
     * Keys can be any valid string but must be unique for every request.
     */
    idempotencyKey: string;
    /**
     * The [location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) where the purchase was made.
     */
    locationId: string;
}
