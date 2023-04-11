import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filter events by the order associated with the event.
 */
export declare class LoyaltyEventOrderFilter extends SpeakeasyBase {
    /**
     * The ID of the [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) associated with the event.
     */
    orderId: string;
}
