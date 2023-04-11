import { SpeakeasyBase } from "../../../internal/utils";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBCashAccount5 } from "./obcashaccount5";
import { OBExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";
export declare class OBScheduledPayment3 extends SpeakeasyBase {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId: string;
    creditorAccount?: OBCashAccount5;
    /**
     * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
     */
    debtorReference?: string;
    instructedAmount: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
     *
     * @remarks
     * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
     * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
     */
    reference?: string;
    /**
     * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    scheduledPaymentDateTime: Date;
    /**
     * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
     */
    scheduledPaymentId?: string;
    scheduledType: OBExternalScheduleType1CodeEnum;
}
