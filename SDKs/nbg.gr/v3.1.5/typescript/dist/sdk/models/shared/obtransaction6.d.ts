import { SpeakeasyBase } from "../../../internal/utils";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBCashAccount6 } from "./obcashaccount6";
import { OBCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { OBEntryStatus1CodeEnum } from "./obentrystatus1codeenum";
import { OBTransactionCashBalance } from "./obtransactioncashbalance";
import { ProprietaryBankTransactionCodeStructure1 } from "./proprietarybanktransactioncodestructure1";
/**
 * Provides further details on an entry in the report.
 */
export declare class OBTransaction6 extends SpeakeasyBase {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId: string;
    amount: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
     */
    balance?: OBTransactionCashBalance;
    /**
     * Date and time when a transaction entry is posted to an account on the account servicer's books.
     *
     * @remarks
     * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    bookingDateTime: Date;
    creditDebitIndicator: OBCreditDebitCodeEnum;
    /**
     * Unambiguous identification of the account of the creditor, in the case of a debit transaction.
     */
    creditorAccount?: OBCashAccount6;
    /**
     * Unambiguous identification of the account of the creditor, in the case of a debit transaction.
     */
    debtorAccount?: OBCashAccount6;
    /**
     * Set of elements to fully identify a proprietary bank transaction code.
     */
    proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;
    status: OBEntryStatus1CodeEnum;
    /**
     * Further details of the transaction.
     *
     * @remarks
     * This is the transaction narrative, which is unstructured text.
     */
    transactionInformation?: string;
    /**
     * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
     */
    transactionReference?: string;
    /**
     * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
     *
     * @remarks
     * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
     * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     * All date-time fields in responses must include the timezone.An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    valueDateTime?: Date;
}
