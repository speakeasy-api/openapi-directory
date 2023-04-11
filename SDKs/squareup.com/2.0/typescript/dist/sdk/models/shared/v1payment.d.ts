import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { V1Money } from "./v1money";
import { V1PaymentItemization } from "./v1paymentitemization";
import { V1PaymentSurcharge } from "./v1paymentsurcharge";
import { V1PaymentTax } from "./v1paymenttax";
import { V1Refund } from "./v1refund";
import { V1Tender } from "./v1tender";
/**
 * A payment represents a paid transaction between a Square merchant and a
 *
 * @remarks
 * customer. Payment details are usually available from Connect API endpoints
 * within a few minutes after the transaction completes.
 *
 * Each Payment object includes several fields that end in `_money`. These fields
 * describe the various amounts of money that contribute to the payment total:
 *
 * <ul>
 * <li>
 * Monetary values are <b>positive</b> if they represent an
 * <em>increase</em> in the amount of money the merchant receives (e.g.,
 * <code>tax_money</code>, <code>tip_money</code>).
 * </li>
 * <li>
 * Monetary values are <b>negative</b> if they represent an
 * <em>decrease</em> in the amount of money the merchant receives (e.g.,
 * <code>discount_money</code>, <code>refunded_money</code>).
 * </li>
 * </ul>
 */
export declare class V1Payment extends SpeakeasyBase {
    /**
     * All of the additive taxes associated with the payment.
     */
    additiveTax?: V1PaymentTax[];
    additiveTaxMoney?: V1Money;
    /**
     * The time when the payment was created, in ISO 8601 format. Reflects the time of the first payment if the object represents an incomplete partial payment, and the time of the last or complete payment otherwise.
     */
    createdAt?: string;
    /**
     * The unique identifier of the Square account that took the payment.
     */
    creatorId?: string;
    device?: Device;
    discountMoney?: V1Money;
    grossSalesMoney?: V1Money;
    /**
     * The payment's unique identifier.
     */
    id?: string;
    /**
     * All of the inclusive taxes associated with the payment.
     */
    inclusiveTax?: V1PaymentTax[];
    inclusiveTaxMoney?: V1Money;
    /**
     * Indicates whether or not the payment is only partially paid for.
     *
     * @remarks
     * If true, this payment will have the tenders collected so far, but the
     * itemizations will be empty until the payment is completed.
     */
    isPartial?: boolean;
    /**
     * The items purchased in the payment.
     */
    itemizations?: V1PaymentItemization[];
    /**
     * The unique identifier of the merchant that took the payment.
     */
    merchantId?: string;
    netSalesMoney?: V1Money;
    netTotalMoney?: V1Money;
    /**
     * The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page.
     */
    paymentUrl?: string;
    processingFeeMoney?: V1Money;
    /**
     * The URL of the receipt for the payment. Note that for split tender
     *
     * @remarks
     * payments, this URL corresponds to the receipt for the first tender
     * listed in the payment's tender field. Each Tender object has its own
     * receipt_url field you can use to get the other receipts associated with
     * a split tender payment.
     */
    receiptUrl?: string;
    refundedMoney?: V1Money;
    /**
     * All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange.
     */
    refunds?: V1Refund[];
    surchargeMoney?: V1Money;
    /**
     * A list of all surcharges associated with the payment.
     */
    surcharges?: V1PaymentSurcharge[];
    swedishRoundingMoney?: V1Money;
    taxMoney?: V1Money;
    /**
     * All of the tenders associated with the payment.
     */
    tender?: V1Tender[];
    tipMoney?: V1Money;
    totalCollectedMoney?: V1Money;
}
