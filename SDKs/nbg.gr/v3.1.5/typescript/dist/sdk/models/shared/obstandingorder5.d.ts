import { SpeakeasyBase } from "../../../internal/utils";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBCashAccount5 } from "./obcashaccount5";
import { OBExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";
export declare class OBStandingOrder5 extends SpeakeasyBase {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId: string;
    creditorAccount?: OBCashAccount5;
    finalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    finalPaymentDateTime?: Date;
    firstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    firstPaymentDateTime?: Date;
    /**
     * Individual Definitions:
     *
     * @remarks
     * IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31)
     * Full Regular Expression:
     * ^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$
     */
    frequency: string;
    lastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    lastPaymentDateTime?: Date;
    nextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    nextPaymentDateTime?: Date;
    /**
     * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
     *
     * @remarks
     * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
     * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
     */
    reference?: string;
    /**
     * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
     */
    standingOrderId?: string;
    standingOrderStatusCode?: OBExternalStandingOrderStatus1CodeEnum;
}
