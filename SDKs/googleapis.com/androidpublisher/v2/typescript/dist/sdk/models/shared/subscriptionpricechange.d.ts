import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
 */
export declare class SubscriptionPriceChange extends SpeakeasyBase {
    newPrice?: Price;
    /**
     * The current state of the price change. Possible values are:
     *
     * @remarks
     * - Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API.
     * - Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
     */
    state?: number;
}
