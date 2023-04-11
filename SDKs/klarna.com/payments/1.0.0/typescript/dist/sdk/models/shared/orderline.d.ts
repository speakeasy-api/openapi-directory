import { SpeakeasyBase } from "../../../internal/utils";
import { ProductIdentifiers } from "./productidentifiers";
import { Subscription } from "./subscription";
export declare class OrderLine extends SpeakeasyBase {
    /**
     * URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).
     *
     * @remarks
     *  A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won't even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB.
     */
    imageUrl?: string;
    /**
     * Used for storing merchant's internal order number or other reference. Pass through field. (max 1024 characters)
     */
    merchantData?: string;
    /**
     * Descriptive name of the order line item.
     */
    name: string;
    productIdentifiers?: ProductIdentifiers;
    /**
     * URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters)
     */
    productUrl?: string;
    /**
     * Quantity of the order line item. Must be a non-negative number.
     */
    quantity: number;
    /**
     * Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters.
     */
    quantityUnit?: string;
    /**
     * Client facing article number, SKU or similar. Max length is 256 characters.
     */
    reference?: string;
    subscription?: Subscription;
    /**
     * Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 = 19%.
     */
    taxRate?: number;
    /**
     * Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500=25 euros
     *
     * @remarks
     * Value = (quantity x unit_price) - total_discount_amount.
     * (max value: 100000000)
     */
    totalAmount: number;
    /**
     * Non-negative minor units. Includes tax. Eg: 500=5 euros
     */
    totalDiscountAmount?: number;
    /**
     * Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount.
     */
    totalTaxAmount?: number;
    /**
     * Type of the order line item. The possible values are:
     *
     * @remarks
     *
     * physical
     * discount
     * shipping_fee
     * sales_tax
     * digital
     * gift_card
     * store_credit
     * surcharge
     */
    type?: string;
    /**
     * Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000)
     */
    unitPrice: number;
}
