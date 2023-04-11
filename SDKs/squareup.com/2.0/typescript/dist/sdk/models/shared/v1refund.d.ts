import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
import { V1PaymentSurcharge } from "./v1paymentsurcharge";
import { V1PaymentTax } from "./v1paymenttax";
/**
 * V1Refund
 */
export declare class V1Refund extends SpeakeasyBase {
    /**
     * The time when the merchant initiated the refund for Square to process, in ISO 8601 format.
     */
    createdAt?: string;
    /**
     * Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded.
     */
    isExchange?: boolean;
    merchantId?: string;
    /**
     * A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders.
     */
    paymentId?: string;
    /**
     * The time when Square processed the refund on behalf of the merchant, in ISO 8601 format.
     */
    processedAt?: string;
    /**
     * The merchant-specified reason for the refund.
     */
    reason?: string;
    /**
     * All of the additive taxes associated with the refund.
     */
    refundedAdditiveTax?: V1PaymentTax[];
    refundedAdditiveTaxMoney?: V1Money;
    refundedDiscountMoney?: V1Money;
    /**
     * All of the inclusive taxes associated with the refund.
     */
    refundedInclusiveTax?: V1PaymentTax[];
    refundedInclusiveTaxMoney?: V1Money;
    refundedMoney?: V1Money;
    refundedProcessingFeeMoney?: V1Money;
    refundedSurchargeMoney?: V1Money;
    /**
     * A list of all surcharges associated with the refund.
     */
    refundedSurcharges?: V1PaymentSurcharge[];
    refundedTaxMoney?: V1Money;
    refundedTipMoney?: V1Money;
    /**
     * The type of refund
     */
    type?: string;
}
