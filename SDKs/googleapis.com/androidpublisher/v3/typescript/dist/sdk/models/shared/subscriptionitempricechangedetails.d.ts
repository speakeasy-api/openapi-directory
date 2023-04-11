import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Price change mode specifies how the subscription item price is changing.
 */
export declare enum SubscriptionItemPriceChangeDetailsPriceChangeModeEnum {
    PriceChangeModeUnspecified = "PRICE_CHANGE_MODE_UNSPECIFIED",
    PriceDecrease = "PRICE_DECREASE",
    PriceIncrease = "PRICE_INCREASE"
}
/**
 * State the price change is currently in.
 */
export declare enum SubscriptionItemPriceChangeDetailsPriceChangeStateEnum {
    PriceChangeStateUnspecified = "PRICE_CHANGE_STATE_UNSPECIFIED",
    Outstanding = "OUTSTANDING",
    Confirmed = "CONFIRMED",
    Applied = "APPLIED"
}
/**
 * Price change related information of a subscription item.
 */
export declare class SubscriptionItemPriceChangeDetails extends SpeakeasyBase {
    /**
     * The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause.
     */
    expectedNewPriceChargeTime?: string;
    /**
     * Represents an amount of money with its currency type.
     */
    newPrice?: Money;
    /**
     * Price change mode specifies how the subscription item price is changing.
     */
    priceChangeMode?: SubscriptionItemPriceChangeDetailsPriceChangeModeEnum;
    /**
     * State the price change is currently in.
     */
    priceChangeState?: SubscriptionItemPriceChangeDetailsPriceChangeStateEnum;
}
