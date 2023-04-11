import { SpeakeasyBase } from "../../../internal/utils";
import { OrderPromotionItem } from "./orderpromotionitem";
import { Price } from "./price";
export declare class OrderPromotion extends SpeakeasyBase {
    /**
     * Items that this promotion may be applied to. If empty, there are no restrictions on applicable items and quantity. This field will also be empty for shipping promotions because shipping is not tied to any specific item.
     */
    applicableItems?: OrderPromotionItem[];
    /**
     * Items that this promotion have been applied to. Do not provide for `orders.createtestorder`. This field will be empty for shipping promotions because shipping is not tied to any specific item.
     */
    appliedItems?: OrderPromotionItem[];
    /**
     * Promotion end time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z".
     */
    endTime?: string;
    /**
     * Required. The party funding the promotion. Only `merchant` is supported for `orders.createtestorder`. Acceptable values are: - "`google`" - "`merchant`"
     */
    funder?: string;
    /**
     * Required. This field is used to identify promotions within merchants' own systems.
     */
    merchantPromotionId?: string;
    priceValue?: Price;
    /**
     * A short title of the promotion to be shown on the checkout page. Do not provide for `orders.createtestorder`.
     */
    shortTitle?: string;
    /**
     * Promotion start time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z".
     */
    startTime?: string;
    /**
     * Required. The category of the promotion. Only `moneyOff` is supported for `orders.createtestorder`. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeShippingOvernight`" - "`freeShippingStandard`" - "`freeShippingTwoDay`" - "`moneyOff`" - "`percentOff`" - "`rewardPoints`" - "`salePrice`"
     */
    subtype?: string;
    taxValue?: Price;
    /**
     * Required. The title of the promotion.
     */
    title?: string;
    /**
     * Required. The scope of the promotion. Only `product` is supported for `orders.createtestorder`. Acceptable values are: - "`product`" - "`shipping`"
     */
    type?: string;
}
