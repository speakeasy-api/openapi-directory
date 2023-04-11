import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides metadata when the event `type` is `EXPIRE_POINTS`.
 */
export declare class LoyaltyEventExpirePoints extends SpeakeasyBase {
    /**
     * The Square-assigned ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram).
     */
    loyaltyProgramId: string;
    /**
     * The number of points expired.
     */
    points: number;
}
