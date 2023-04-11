import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the account to which the transfer will be sent.
 */
export declare enum CreateAnAchTransferParametersFundingEnum {
    Checking = "checking",
    Savings = "savings"
}
/**
 * The Standard Entry Class (SEC) code to use for the transfer.
 */
export declare enum CreateAnAchTransferParametersStandardEntryClassCodeEnum {
    CorporateCreditOrDebit = "corporate_credit_or_debit",
    PrearrangedPaymentsAndDeposit = "prearranged_payments_and_deposit",
    InternetInitiated = "internet_initiated"
}
export declare class CreateAnAchTransferParameters extends SpeakeasyBase {
    /**
     * The Increase identifier for the account that will send the transfer.
     */
    accountId: string;
    /**
     * The account number for the destination account.
     */
    accountNumber?: string;
    /**
     * Additional information that will be sent to the recipient. This is included in the transfer data sent to the receiving bank.
     */
    addendum?: string;
    /**
     * The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account.
     */
    amount: number;
    /**
     * The description of the date of the transfer, usually in the format `YYYYMMDD`. This is included in the transfer data sent to the receiving bank.
     */
    companyDescriptiveDate?: string;
    /**
     * The data you choose to associate with the transfer. This is included in the transfer data sent to the receiving bank.
     */
    companyDiscretionaryData?: string;
    /**
     * A description of the transfer. This is included in the transfer data sent to the receiving bank.
     */
    companyEntryDescription?: string;
    /**
     * The name by which the recipient knows you. This is included in the transfer data sent to the receiving bank.
     */
    companyName?: string;
    /**
     * The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    effectiveDate?: Date;
    /**
     * The ID of an External Account to initiate a transfer to. If this parameter is provided, `account_number`, `routing_number`, and `funding` must be absent.
     */
    externalAccountId?: string;
    /**
     * The type of the account to which the transfer will be sent.
     */
    funding?: CreateAnAchTransferParametersFundingEnum;
    /**
     * Your identifer for the transfer recipient.
     */
    individualId?: string;
    /**
     * The name of the transfer recipient. This value is informational and not verified by the recipient's bank.
     */
    individualName?: string;
    /**
     * Whether the transfer requires explicit approval via the dashboard or API.
     */
    requireApproval?: boolean;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.
     */
    routingNumber?: string;
    /**
     * The Standard Entry Class (SEC) code to use for the transfer.
     */
    standardEntryClassCode?: CreateAnAchTransferParametersStandardEntryClassCodeEnum;
    /**
     * A description you choose to give the transfer. This will be saved with the transfer details, displayed in the dashboard, and returned by the API. If `individual_name` and `company_name` are not explicitly set by this API, the `statement_descriptor` will be sent in those fields to the receiving bank to help the customer recognize the transfer. You are highly encouraged to pass `individual_name` and `company_name` instead of relying on this fallback.
     */
    statementDescriptor: string;
}
