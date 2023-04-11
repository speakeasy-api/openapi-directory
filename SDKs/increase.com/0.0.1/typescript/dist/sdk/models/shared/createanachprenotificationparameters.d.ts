import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the Prenotification is for a future debit or credit.
 */
export declare enum CreateAnAchPrenotificationParametersCreditDebitIndicatorEnum {
    Credit = "credit",
    Debit = "debit"
}
/**
 * The Standard Entry Class (SEC) code to use for the ACH Prenotification.
 */
export declare enum CreateAnAchPrenotificationParametersStandardEntryClassCodeEnum {
    CorporateCreditOrDebit = "corporate_credit_or_debit",
    PrearrangedPaymentsAndDeposit = "prearranged_payments_and_deposit",
    InternetInitiated = "internet_initiated"
}
export declare class CreateAnAchPrenotificationParameters extends SpeakeasyBase {
    /**
     * The account number for the destination account.
     */
    accountNumber: string;
    /**
     * Additional information that will be sent to the recipient.
     */
    addendum?: string;
    /**
     * The description of the date of the transfer.
     */
    companyDescriptiveDate?: string;
    /**
     * The data you choose to associate with the transfer.
     */
    companyDiscretionaryData?: string;
    /**
     * The description of the transfer you wish to be shown to the recipient.
     */
    companyEntryDescription?: string;
    /**
     * The name by which the recipient knows you.
     */
    companyName?: string;
    /**
     * Whether the Prenotification is for a future debit or credit.
     */
    creditDebitIndicator?: CreateAnAchPrenotificationParametersCreditDebitIndicatorEnum;
    /**
     * The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    effectiveDate?: Date;
    /**
     * Your identifer for the transfer recipient.
     */
    individualId?: string;
    /**
     * The name of the transfer recipient. This value is information and not verified by the recipient's bank.
     */
    individualName?: string;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.
     */
    routingNumber: string;
    /**
     * The Standard Entry Class (SEC) code to use for the ACH Prenotification.
     */
    standardEntryClassCode?: CreateAnAchPrenotificationParametersStandardEntryClassCodeEnum;
}
