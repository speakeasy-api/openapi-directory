import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.
 */
export declare class AchTransferTransferApproval extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was approved.
     */
    approvedAt: Date;
}
/**
 * If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.
 */
export declare class AchTransferTransferCancellation extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Transfer was canceled.
     */
    canceledAt: Date;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's currency. For ACH transfers this is always equal to `usd`.
 */
export declare enum AchTransferCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The type of the account to which the transfer will be sent.
 */
export declare enum AchTransferFundingEnum {
    Checking = "checking",
    Savings = "savings"
}
/**
 * The transfer's network.
 */
export declare enum AchTransferNetworkEnum {
    Ach = "ach"
}
/**
 * If the receiving bank accepts the transfer but notifies that future transfers should use different details, this will contain those details.
 */
export declare class ACHTransferACHNotificationOfChange extends SpeakeasyBase {
    /**
     * The type of change that occurred.
     */
    changeCode: string;
    /**
     * The corrected data.
     */
    correctedData: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the notification occurred.
     */
    createdAt: Date;
}
/**
 * Why the ACH Transfer was returned.
 */
export declare enum ACHTransferACHTransferReturnReturnReasonCodeEnum {
    InsufficientFund = "insufficient_fund",
    NoAccount = "no_account",
    AccountClosed = "account_closed",
    InvalidAccountNumberStructure = "invalid_account_number_structure",
    AccountFrozenEntryReturnedPerOfacInstruction = "account_frozen_entry_returned_per_ofac_instruction",
    CreditEntryRefusedByReceiver = "credit_entry_refused_by_receiver",
    UnauthorizedDebitToConsumerAccountUsingCorporateSecCode = "unauthorized_debit_to_consumer_account_using_corporate_sec_code",
    CorporateCustomerAdvisedNotAuthorized = "corporate_customer_advised_not_authorized",
    PaymentStopped = "payment_stopped",
    NonTransactionAccount = "non_transaction_account",
    UncollectedFunds = "uncollected_funds",
    RoutingNumberCheckDigitError = "routing_number_check_digit_error",
    CustomerAdvisedUnauthorizedImproperIneligibleOrIncomplete = "customer_advised_unauthorized_improper_ineligible_or_incomplete",
    AmountFieldError = "amount_field_error",
    AuthorizationRevokedByCustomer = "authorization_revoked_by_customer",
    InvalidAchRoutingNumber = "invalid_ach_routing_number",
    FileRecordEditCriteria = "file_record_edit_criteria",
    EnrInvalidIndividualName = "enr_invalid_individual_name",
    ReturnedPerOdfiRequest = "returned_per_odfi_request",
    AddendaError = "addenda_error",
    LimitedParticipationDfi = "limited_participation_dfi",
    IncorrectlyCodedOutboundInternationalPayment = "incorrectly_coded_outbound_international_payment",
    Other = "other"
}
/**
 * If your transfer is returned, this will contain details of the return.
 */
export declare class ACHTransferACHTransferReturn extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * Why the ACH Transfer was returned.
     */
    returnReasonCode: ACHTransferACHTransferReturnReturnReasonCodeEnum;
    /**
     * The identifier of the Tranasaction associated with this return.
     */
    transactionId: string;
    /**
     * The identifier of the ACH Transfer associated with this return.
     */
    transferId: string;
}
/**
 * The Standard Entry Class (SEC) code to use for the transfer.
 */
export declare enum AchTransferStandardEntryClassCodeEnum {
    CorporateCreditOrDebit = "corporate_credit_or_debit",
    PrearrangedPaymentsAndDeposit = "prearranged_payments_and_deposit",
    InternetInitiated = "internet_initiated"
}
/**
 * The lifecycle status of the transfer.
 */
export declare enum AchTransferStatusEnum {
    PendingApproval = "pending_approval",
    Canceled = "canceled",
    PendingSubmission = "pending_submission",
    Submitted = "submitted",
    Returned = "returned",
    RequiresAttention = "requires_attention",
    Rejected = "rejected"
}
/**
 * After the transfer is submitted to FedACH, this will contain supplemental details.
 */
export declare class ACHTransferACHTransferSubmission extends SpeakeasyBase {
    /**
     * When the ACH transfer was sent to FedACH.
     */
    submittedAt: Date;
    /**
     * The trace number for the submission.
     */
    traceNumber: string;
}
/**
 * A constant representing the object's type. For this resource it will always be `ach_transfer`.
 */
export declare enum AchTransferTypeEnum {
    AchTransfer = "ach_transfer"
}
/**
 * ACH transfers move funds between your Increase account and any other account accessible by the Automated Clearing House (ACH).
 */
export declare class AchTransfer extends SpeakeasyBase {
    /**
     * The Account to which the transfer belongs.
     */
    accountId: string;
    /**
     * The destination account number.
     */
    accountNumber: string;
    /**
     * Additional information that will be sent to the recipient.
     */
    addendum: string;
    /**
     * The transfer amount in USD cents. A positive amount indicates a credit transfer pushing funds to the receiving account. A negative amount indicates a debit transfer pulling funds from the receiving account.
     */
    amount: number;
    /**
     * If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.
     */
    approval: AchTransferTransferApproval;
    /**
     * If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.
     */
    cancellation: AchTransferTransferCancellation;
    /**
     * The description of the date of the transfer.
     */
    companyDescriptiveDate: string;
    /**
     * The data you chose to associate with the transfer.
     */
    companyDiscretionaryData: string;
    /**
     * The description of the transfer you set to be shown to the recipient.
     */
    companyEntryDescription: string;
    /**
     * The name by which the recipient knows you.
     */
    companyName: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's currency. For ACH transfers this is always equal to `usd`.
     */
    currency: AchTransferCurrencyEnum;
    /**
     * The identifier of the External Account the transfer was made to, if any.
     */
    externalAccountId: string;
    /**
     * The type of the account to which the transfer will be sent.
     */
    funding: AchTransferFundingEnum;
    /**
     * The ACH transfer's identifier.
     */
    id: string;
    /**
     * Your identifer for the transfer recipient.
     */
    individualId: string;
    /**
     * The name of the transfer recipient. This value is information and not verified by the recipient's bank.
     */
    individualName: string;
    /**
     * The transfer's network.
     */
    network: AchTransferNetworkEnum;
    /**
     * If the receiving bank accepts the transfer but notifies that future transfers should use different details, this will contain those details.
     */
    notificationOfChange: ACHTransferACHNotificationOfChange;
    /**
     * If your transfer is returned, this will contain details of the return.
     */
    return: ACHTransferACHTransferReturn;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN).
     */
    routingNumber: string;
    /**
     * The Standard Entry Class (SEC) code to use for the transfer.
     */
    standardEntryClassCode: AchTransferStandardEntryClassCodeEnum;
    /**
     * The descriptor that will show on the recipient's bank statement.
     */
    statementDescriptor: string;
    /**
     * The lifecycle status of the transfer.
     */
    status: AchTransferStatusEnum;
    /**
     * After the transfer is submitted to FedACH, this will contain supplemental details.
     */
    submission: ACHTransferACHTransferSubmission;
    /**
     * If the transfer was created from a template, this will be the template's ID.
     */
    templateId: string;
    /**
     * The ID for the transaction funding the transfer.
     */
    transactionId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `ach_transfer`.
     */
    type: AchTransferTypeEnum;
}
