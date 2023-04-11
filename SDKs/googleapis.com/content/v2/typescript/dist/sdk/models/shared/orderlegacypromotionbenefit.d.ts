import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrderLegacyPromotionBenefit extends SpeakeasyBase {
    discount?: Price;
    /**
     * The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
     */
    offerIds?: string[];
    /**
     * Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeOvernightShipping`" - "`freeShipping`" - "`freeTwoDayShipping`" - "`moneyOff`" - "`percentageOff`" - "`rewardPoints`" - "`salePrice`"
     */
    subType?: string;
    taxImpact?: Price;
    /**
     * Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable values are: - "`product`" - "`shipping`"
     */
    type?: string;
}
