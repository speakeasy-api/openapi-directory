import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
import { V1PaymentDiscount } from "./v1paymentdiscount";
import { V1PaymentItemDetail } from "./v1paymentitemdetail";
import { V1PaymentModifier } from "./v1paymentmodifier";
import { V1PaymentTax } from "./v1paymenttax";
/**
 * Payment include an` itemizations` field that lists the items purchased,
 *
 * @remarks
 * along with associated fees, modifiers, and discounts. Each itemization has an
 * `itemization_type` field that indicates which of the following the itemization
 * represents:
 *
 * <ul>
 * <li>An item variation from the merchant's item library</li>
 * <li>A custom monetary amount</li>
 * <li>
 * An action performed on a Square gift card, such as activating or
 * reloading it.
 * </li>
 * </ul>
 *
 * *Note**: itemization information included in a `Payment` object reflects
 * details collected **at the time of the payment**. Details such as the name or
 * price of items might have changed since the payment was processed.
 */
export declare class V1PaymentItemization extends SpeakeasyBase {
    discountMoney?: V1Money;
    /**
     * All discounts applied to this itemization.
     */
    discounts?: V1PaymentDiscount[];
    grossSalesMoney?: V1Money;
    /**
     * V1PaymentItemDetail
     */
    itemDetail?: V1PaymentItemDetail;
    /**
     * The name of the item variation purchased, if any.
     */
    itemVariationName?: string;
    /**
     * The type of purchase that the itemization represents, such as an ITEM or CUSTOM_AMOUNT
     */
    itemizationType?: string;
    /**
     * All modifier options applied to this itemization.
     */
    modifiers?: V1PaymentModifier[];
    /**
     * The item's name.
     */
    name?: string;
    netSalesMoney?: V1Money;
    /**
     * Notes entered by the merchant about the item at the time of payment, if any.
     */
    notes?: string;
    /**
     * The quantity of the item purchased. This can be a decimal value.
     */
    quantity?: number;
    singleQuantityMoney?: V1Money;
    /**
     * All taxes applied to this itemization.
     */
    taxes?: V1PaymentTax[];
    totalMoney?: V1Money;
}
