import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
 */
export declare class LoyaltyEventAccumulatePoints extends SpeakeasyBase {
    /**
     * The ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram).
     */
    loyaltyProgramId?: string;
    /**
     * The ID of the [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) for which the buyer accumulated the points.
     *
     * @remarks
     * This field is returned only if the Orders API is used to process orders.
     */
    orderId?: string;
    /**
     * The number of points accumulated by the event.
     */
    points?: number;
}
