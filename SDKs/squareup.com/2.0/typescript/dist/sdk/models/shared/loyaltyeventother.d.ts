import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides metadata when the event `type` is `OTHER`.
 */
export declare class LoyaltyEventOther extends SpeakeasyBase {
    /**
     * The Square-assigned ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram).
     */
    loyaltyProgramId: string;
    /**
     * The number of points added or removed.
     */
    points: number;
}
