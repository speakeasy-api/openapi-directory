import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyEventAdjustPoints } from "./loyaltyeventadjustpoints";
/**
 * A request to adjust (add or subtract) points manually.
 */
export declare class AdjustLoyaltyPointsRequest extends SpeakeasyBase {
    /**
     * Provides metadata when the event `type` is `ADJUST_POINTS`.
     */
    adjustPoints: LoyaltyEventAdjustPoints;
    /**
     * A unique string that identifies this `AdjustLoyaltyPoints` request.
     *
     * @remarks
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
}
