import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Transaction's currency. This will match the currency on the Transcation's Account.
 */
export declare enum TransactionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum TransactionTransactionSourceAccountTransferIntentionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Account Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `account_transfer_intention`.
 */
export declare class TransactionTransactionSourceAccountTransferIntention extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: TransactionTransactionSourceAccountTransferIntentionCurrencyEnum;
    /**
     * The description you chose to give the transfer.
     */
    description: string;
    /**
     * The identifier of the Account to where the Account Transfer was sent.
     */
    destinationAccountId: string;
    /**
     * The identifier of the Account from where the Account Transfer was sent.
     */
    sourceAccountId: string;
    /**
     * The identifier of the Account Transfer that led to this Pending Transaction.
     */
    transferId: string;
}
/**
 * A ACH Check Conversion object. This field will be present in the JSON response if and only if `category` is equal to `ach_check_conversion`.
 */
export declare class TransactionTransactionSourceACHCheckConversion extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The identifier of the File containing an image of the returned check.
     */
    fileId: string;
}
/**
 * A ACH Check Conversion Return object. This field will be present in the JSON response if and only if `category` is equal to `ach_check_conversion_return`.
 */
export declare class TransactionTransactionSourceACHCheckConversionReturn extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * Why the transfer was returned.
     */
    returnReasonCode: string;
}
/**
 * A ACH Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_intention`.
 */
export declare class TransactionTransactionSourceACHTransferIntention extends SpeakeasyBase {
    accountNumber: string;
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    routingNumber: string;
    statementDescriptor: string;
    /**
     * The identifier of the ACH Transfer that led to this Transaction.
     */
    transferId: string;
}
/**
 * A ACH Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_rejection`.
 */
export declare class TransactionTransactionSourceACHTransferRejection extends SpeakeasyBase {
    /**
     * The identifier of the ACH Transfer that led to this Transaction.
     */
    transferId: string;
}
/**
 * Why the ACH Transfer was returned.
 */
export declare enum TransactionTransactionSourceACHTransferReturnReturnReasonCodeEnum {
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
 * A ACH Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_return`.
 */
export declare class TransactionTransactionSourceACHTransferReturn extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * Why the ACH Transfer was returned.
     */
    returnReasonCode: TransactionTransactionSourceACHTransferReturnReturnReasonCodeEnum;
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
 * A Card Dispute Acceptance object. This field will be present in the JSON response if and only if `category` is equal to `card_dispute_acceptance`.
 */
export declare class TransactionTransactionSourceCardDisputeAcceptance extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was accepted.
     */
    acceptedAt: Date;
    /**
     * The identifier of the Card Dispute that was accepted.
     */
    cardDisputeId: string;
    /**
     * The identifier of the Transaction that was created to return the disputed funds to your account.
     */
    transactionId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum TransactionTransactionSourceCardRefundCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A constant representing the object's type. For this resource it will always be `card_refund`.
 */
export declare enum TransactionTransactionSourceCardRefundTypeEnum {
    CardRefund = "card_refund"
}
/**
 * A Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_refund`.
 */
export declare class TransactionTransactionSourceCardRefund extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The identifier for the Transaction this refunds, if any.
     */
    cardSettlementTransactionId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: TransactionTransactionSourceCardRefundCurrencyEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `card_refund`.
     */
    type: TransactionTransactionSourceCardRefundTypeEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the refund currency.
 */
export declare enum TransactionTransactionSourceDeprecatedCardRefundCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Deprecated Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_route_refund`.
 */
export declare class TransactionTransactionSourceDeprecatedCardRefund extends SpeakeasyBase {
    /**
     * The refunded amount in the minor unit of the refunded currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the refund currency.
     */
    currency: TransactionTransactionSourceDeprecatedCardRefundCurrencyEnum;
    merchantAcceptorId: string;
    merchantCategoryCode: string;
    merchantCity: string;
    merchantCountry: string;
    merchantDescriptor: string;
    merchantState: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the settlement currency.
 */
export declare enum TransactionTransactionSourceDeprecatedCardSettlementCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Deprecated Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_route_settlement`.
 */
export declare class TransactionTransactionSourceDeprecatedCardSettlement extends SpeakeasyBase {
    /**
     * The settled amount in the minor unit of the settlement currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the settlement currency.
     */
    currency: TransactionTransactionSourceDeprecatedCardSettlementCurrencyEnum;
    merchantAcceptorId: string;
    merchantCategoryCode: string;
    merchantCity: string;
    merchantCountry: string;
    merchantDescriptor: string;
    merchantState: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's settlement currency.
 */
export declare enum TransactionTransactionSourceCardSettlementCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A constant representing the object's type. For this resource it will always be `card_settlement`.
 */
export declare enum TransactionTransactionSourceCardSettlementTypeEnum {
    CardSettlement = "card_settlement"
}
/**
 * A Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_settlement`.
 */
export declare class TransactionTransactionSourceCardSettlement extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's settlement currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's settlement currency.
     */
    currency: TransactionTransactionSourceCardSettlementCurrencyEnum;
    merchantCategoryCode: string;
    merchantCity: string;
    merchantCountry: string;
    merchantName: string;
    merchantState: string;
    /**
     * The identifier of the Pending Transaction associated with this Transaction.
     */
    pendingTransactionId: string;
    /**
     * The amount in the minor unit of the transaction's presentment currency.
     */
    presentmentAmount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's presentment currency.
     */
    presentmentCurrency: string;
    /**
     * A constant representing the object's type. For this resource it will always be `card_settlement`.
     */
    type: TransactionTransactionSourceCardSettlementTypeEnum;
}
/**
 * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
 */
export declare enum TransactionTransactionSourceCategoryEnum {
    AccountTransferIntention = "account_transfer_intention",
    AchCheckConversionReturn = "ach_check_conversion_return",
    AchCheckConversion = "ach_check_conversion",
    AchTransferIntention = "ach_transfer_intention",
    AchTransferRejection = "ach_transfer_rejection",
    AchTransferReturn = "ach_transfer_return",
    CardDisputeAcceptance = "card_dispute_acceptance",
    CardRefund = "card_refund",
    CardSettlement = "card_settlement",
    CheckDepositAcceptance = "check_deposit_acceptance",
    CheckDepositReturn = "check_deposit_return",
    CheckTransferIntention = "check_transfer_intention",
    CheckTransferReturn = "check_transfer_return",
    CheckTransferRejection = "check_transfer_rejection",
    CheckTransferStopPaymentRequest = "check_transfer_stop_payment_request",
    DisputeResolution = "dispute_resolution",
    EmpyrealCashDeposit = "empyreal_cash_deposit",
    InboundAchTransfer = "inbound_ach_transfer",
    InboundAchTransferReturnIntention = "inbound_ach_transfer_return_intention",
    InboundCheck = "inbound_check",
    InboundInternationalAchTransfer = "inbound_international_ach_transfer",
    InboundRealTimePaymentsTransferConfirmation = "inbound_real_time_payments_transfer_confirmation",
    InboundWireDrawdownPaymentReversal = "inbound_wire_drawdown_payment_reversal",
    InboundWireDrawdownPayment = "inbound_wire_drawdown_payment",
    InboundWireReversal = "inbound_wire_reversal",
    InboundWireTransfer = "inbound_wire_transfer",
    InterestPayment = "interest_payment",
    InternalGeneralLedgerTransaction = "internal_general_ledger_transaction",
    InternalSource = "internal_source",
    CardRouteRefund = "card_route_refund",
    CardRouteSettlement = "card_route_settlement",
    RealTimePaymentsTransferAcknowledgement = "real_time_payments_transfer_acknowledgement",
    SampleFunds = "sample_funds",
    WireDrawdownPaymentIntention = "wire_drawdown_payment_intention",
    WireDrawdownPaymentRejection = "wire_drawdown_payment_rejection",
    WireTransferIntention = "wire_transfer_intention",
    WireTransferRejection = "wire_transfer_rejection",
    Other = "other"
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum TransactionTransactionSourceCheckDepositAcceptanceCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Check Deposit Acceptance object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_acceptance`.
 */
export declare class TransactionTransactionSourceCheckDepositAcceptance extends SpeakeasyBase {
    /**
     * The account number printed on the check.
     */
    accountNumber: string;
    /**
     * The amount to be deposited in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * An additional line of metadata printed on the check. This typically includes the check number for business checks.
     */
    auxiliaryOnUs: string;
    /**
     * The ID of the Check Deposit that was accepted.
     */
    checkDepositId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: TransactionTransactionSourceCheckDepositAcceptanceCurrencyEnum;
    /**
     * The routing number printed on the check.
     */
    routingNumber: string;
    /**
     * The check serial number, if present, for consumer checks. For business checks, the serial number is usually in the `auxiliary_on_us` field.
     */
    serialNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum TransactionTransactionSourceCheckDepositReturnCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
export declare enum TransactionTransactionSourceCheckDepositReturnReturnReasonEnum {
    AchConversionNotSupported = "ach_conversion_not_supported",
    ClosedAccount = "closed_account",
    DuplicateSubmission = "duplicate_submission",
    InsufficientFunds = "insufficient_funds",
    NoAccount = "no_account",
    NotAuthorized = "not_authorized",
    StaleDated = "stale_dated",
    StopPayment = "stop_payment",
    UnknownReason = "unknown_reason",
    UnmatchedDetails = "unmatched_details",
    UnreadableImage = "unreadable_image"
}
/**
 * A Check Deposit Return object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_return`.
 */
export declare class TransactionTransactionSourceCheckDepositReturn extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The identifier of the Check Deposit that was returned.
     */
    checkDepositId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: TransactionTransactionSourceCheckDepositReturnCurrencyEnum;
    returnReason: TransactionTransactionSourceCheckDepositReturnReturnReasonEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check deposit was returned.
     */
    returnedAt: Date;
    /**
     * The identifier of the transaction that reversed the original check deposit transaction.
     */
    transactionId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
 */
export declare enum TransactionTransactionSourceCheckTransferIntentionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Check Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_intention`.
 */
export declare class TransactionTransactionSourceCheckTransferIntention extends SpeakeasyBase {
    /**
     * The city of the check's destination.
     */
    addressCity: string;
    /**
     * The street address of the check's destination.
     */
    addressLine1: string;
    /**
     * The second line of the address of the check's destination.
     */
    addressLine2: string;
    /**
     * The state of the check's destination.
     */
    addressState: string;
    /**
     * The postal code of the check's destination.
     */
    addressZip: string;
    /**
     * The transfer amount in USD cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
     */
    currency: TransactionTransactionSourceCheckTransferIntentionCurrencyEnum;
    /**
     * The name that will be printed on the check.
     */
    recipientName: string;
    /**
     * The identifier of the Check Transfer with which this is associated.
     */
    transferId: string;
}
/**
 * A Check Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_rejection`.
 */
export declare class TransactionTransactionSourceCheckTransferRejection extends SpeakeasyBase {
    /**
     * The identifier of the Check Transfer that led to this Transaction.
     */
    transferId: string;
}
/**
 * A Check Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_return`.
 */
export declare class TransactionTransactionSourceCheckTransferReturn extends SpeakeasyBase {
    /**
     * If available, a document with additional information about the return.
     */
    fileId: string;
    /**
     * The identifier of the returned Check Transfer.
     */
    transferId: string;
}
/**
 * A constant representing the object's type. For this resource it will always be `check_transfer_stop_payment_request`.
 */
export declare enum TransactionTransactionSourceCheckTransferStopPaymentRequestTypeEnum {
    CheckTransferStopPaymentRequest = "check_transfer_stop_payment_request"
}
/**
 * A Check Transfer Stop Payment Request object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_stop_payment_request`.
 */
export declare class TransactionTransactionSourceCheckTransferStopPaymentRequest extends SpeakeasyBase {
    /**
     * The time the stop-payment was requested.
     */
    requestedAt: Date;
    /**
     * The transaction ID of the corresponding credit transaction.
     */
    transactionId: string;
    /**
     * The ID of the check transfer that was stopped.
     */
    transferId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `check_transfer_stop_payment_request`.
     */
    type: TransactionTransactionSourceCheckTransferStopPaymentRequestTypeEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum TransactionTransactionSourceDisputeResolutionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Dispute Resolution object. This field will be present in the JSON response if and only if `category` is equal to `dispute_resolution`.
 */
export declare class TransactionTransactionSourceDisputeResolution extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: TransactionTransactionSourceDisputeResolutionCurrencyEnum;
    /**
     * The identifier of the Transaction that was disputed.
     */
    disputedTransactionId: string;
}
/**
 * A Empyreal Cash Deposit object. This field will be present in the JSON response if and only if `category` is equal to `empyreal_cash_deposit`.
 */
export declare class TransactionTransactionSourceEmpyrealCashDeposit extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    bagId: string;
    depositDate: Date;
}
/**
 * A Inbound ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_ach_transfer`.
 */
export declare class TransactionTransactionSourceInboundACHTransfer extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    originatorCompanyDescriptiveDate: string;
    originatorCompanyDiscretionaryData: string;
    originatorCompanyEntryDescription: string;
    originatorCompanyId: string;
    originatorCompanyName: string;
    receiverIdNumber: string;
    receiverName: string;
    traceNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum TransactionTransactionSourceInboundCheckCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Inbound Check object. This field will be present in the JSON response if and only if `category` is equal to `inbound_check`.
 */
export declare class TransactionTransactionSourceInboundCheck extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    checkFrontImageFileId: string;
    checkNumber: string;
    checkRearImageFileId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: TransactionTransactionSourceInboundCheckCurrencyEnum;
}
/**
 * A Inbound International ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_international_ach_transfer`.
 */
export declare class TransactionTransactionSourceInboundInternationalACHTransfer extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    destinationCountryCode: string;
    destinationCurrencyCode: string;
    foreignExchangeIndicator: string;
    foreignExchangeReference: string;
    foreignExchangeReferenceIndicator: string;
    foreignPaymentAmount: number;
    foreignTraceNumber: string;
    internationalTransactionTypeCode: string;
    originatingCurrencyCode: string;
    originatingDepositoryFinancialInstitutionBranchCountry: string;
    originatingDepositoryFinancialInstitutionId: string;
    originatingDepositoryFinancialInstitutionIdQualifier: string;
    originatingDepositoryFinancialInstitutionName: string;
    originatorCity: string;
    originatorCompanyEntryDescription: string;
    originatorCountry: string;
    originatorIdentification: string;
    originatorName: string;
    originatorPostalCode: string;
    originatorStateOrProvince: string;
    originatorStreetAddress: string;
    paymentRelatedInformation: string;
    paymentRelatedInformation2: string;
    receiverCity: string;
    receiverCountry: string;
    receiverIdentificationNumber: string;
    receiverPostalCode: string;
    receiverStateOrProvince: string;
    receiverStreetAddress: string;
    receivingCompanyOrIndividualName: string;
    receivingDepositoryFinancialInstitutionCountry: string;
    receivingDepositoryFinancialInstitutionId: string;
    receivingDepositoryFinancialInstitutionIdQualifier: string;
    receivingDepositoryFinancialInstitutionName: string;
    traceNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the transfer's currency. This will always be "USD" for a Real Time Payments transfer.
 */
export declare enum TransactionTransactionSourceInboundRealTimePaymentsTransferConfirmationCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Inbound Real Time Payments Transfer Confirmation object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_confirmation`.
 */
export declare class TransactionTransactionSourceInboundRealTimePaymentsTransferConfirmation extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transfer's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The name the sender of the transfer specified as the recipient of the transfer.
     */
    creditorName: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the transfer's currency. This will always be "USD" for a Real Time Payments transfer.
     */
    currency: TransactionTransactionSourceInboundRealTimePaymentsTransferConfirmationCurrencyEnum;
    /**
     * The account number of the account that sent the transfer.
     */
    debtorAccountNumber: string;
    /**
     * The name provided by the sender of the transfer.
     */
    debtorName: string;
    /**
     * The routing number of the account that sent the transfer.
     */
    debtorRoutingNumber: string;
    /**
     * Additional information included with the transfer.
     */
    remittanceInformation: string;
    /**
     * The Real Time Payments network identification of the transfer
     */
    transactionIdentification: string;
}
/**
 * A Inbound Wire Drawdown Payment object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
 */
export declare class TransactionTransactionSourceInboundWireDrawdownPayment extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    beneficiaryAddressLine1: string;
    beneficiaryAddressLine2: string;
    beneficiaryAddressLine3: string;
    beneficiaryName: string;
    beneficiaryReference: string;
    description: string;
    inputMessageAccountabilityData: string;
    originatorAddressLine1: string;
    originatorAddressLine2: string;
    originatorAddressLine3: string;
    originatorName: string;
    originatorToBeneficiaryInformation: string;
}
/**
 * A Inbound Wire Drawdown Payment Reversal object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_drawdown_payment_reversal`.
 */
export declare class TransactionTransactionSourceInboundWireDrawdownPaymentReversal extends SpeakeasyBase {
    /**
     * The amount that was reversed.
     */
    amount: number;
    /**
     * The description on the reversal message from Fedwire.
     */
    description: string;
    /**
     * The Fedwire cycle date for the wire reversal.
     */
    inputCycleDate: Date;
    /**
     * The Fedwire transaction identifier.
     */
    inputMessageAccountabilityData: string;
    /**
     * The Fedwire sequence number.
     */
    inputSequenceNumber: string;
    /**
     * The Fedwire input source identifier.
     */
    inputSource: string;
    /**
     * The Fedwire cycle date for the wire transfer that was reversed.
     */
    previousMessageInputCycleDate: Date;
    /**
     * The Fedwire transaction identifier for the wire transfer that was reversed.
     */
    previousMessageInputMessageAccountabilityData: string;
    /**
     * The Fedwire sequence number for the wire transfer that was reversed.
     */
    previousMessageInputSequenceNumber: string;
    /**
     * The Fedwire input source identifier for the wire transfer that was reversed.
     */
    previousMessageInputSource: string;
}
/**
 * A Inbound Wire Reversal object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_reversal`.
 */
export declare class TransactionTransactionSourceInboundWireReversal extends SpeakeasyBase {
    /**
     * The amount that was reversed.
     */
    amount: number;
    /**
     * The description on the reversal message from Fedwire.
     */
    description: string;
    /**
     * Additional financial institution information included in the wire reversal.
     */
    financialInstitutionToFinancialInstitutionInformation: string;
    /**
     * The Fedwire cycle date for the wire reversal.
     */
    inputCycleDate: Date;
    /**
     * The Fedwire transaction identifier.
     */
    inputMessageAccountabilityData: string;
    /**
     * The Fedwire sequence number.
     */
    inputSequenceNumber: string;
    /**
     * The Fedwire input source identifier.
     */
    inputSource: string;
    /**
     * The Fedwire cycle date for the wire transfer that was reversed.
     */
    previousMessageInputCycleDate: Date;
    /**
     * The Fedwire transaction identifier for the wire transfer that was reversed.
     */
    previousMessageInputMessageAccountabilityData: string;
    /**
     * The Fedwire sequence number for the wire transfer that was reversed.
     */
    previousMessageInputSequenceNumber: string;
    /**
     * The Fedwire input source identifier for the wire transfer that was reversed.
     */
    previousMessageInputSource: string;
    /**
     * Information included in the wire reversal for the receiving financial institution.
     */
    receiverFinancialInstitutionInformation: string;
}
/**
 * A Inbound Wire Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_transfer`.
 */
export declare class TransactionTransactionSourceInboundWireTransfer extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    beneficiaryAddressLine1: string;
    beneficiaryAddressLine2: string;
    beneficiaryAddressLine3: string;
    beneficiaryName: string;
    beneficiaryReference: string;
    description: string;
    inputMessageAccountabilityData: string;
    originatorAddressLine1: string;
    originatorAddressLine2: string;
    originatorAddressLine3: string;
    originatorName: string;
    originatorToBeneficiaryInformation: string;
    originatorToBeneficiaryInformationLine1: string;
    originatorToBeneficiaryInformationLine2: string;
    originatorToBeneficiaryInformationLine3: string;
    originatorToBeneficiaryInformationLine4: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction currency.
 */
export declare enum TransactionTransactionSourceInterestPaymentCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Interest Payment object. This field will be present in the JSON response if and only if `category` is equal to `interest_payment`.
 */
export declare class TransactionTransactionSourceInterestPayment extends SpeakeasyBase {
    /**
     * The account on which the interest was accrued.
     */
    accruedOnAccountId: string;
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction currency.
     */
    currency: TransactionTransactionSourceInterestPaymentCurrencyEnum;
    /**
     * The end of the period for which this transaction paid interest.
     */
    periodEnd: Date;
    /**
     * The start of the period for which this transaction paid interest.
     */
    periodStart: Date;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction currency.
 */
export declare enum TransactionTransactionSourceInternalSourceCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
export declare enum TransactionTransactionSourceInternalSourceReasonEnum {
    BankMigration = "bank_migration",
    Cashback = "cashback",
    EmpyrealAdjustment = "empyreal_adjustment",
    Error = "error",
    ErrorCorrection = "error_correction",
    Fees = "fees",
    Interest = "interest",
    SampleFunds = "sample_funds",
    SampleFundsReturn = "sample_funds_return"
}
/**
 * A Internal Source object. This field will be present in the JSON response if and only if `category` is equal to `internal_source`.
 */
export declare class TransactionTransactionSourceInternalSource extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction currency.
     */
    currency: TransactionTransactionSourceInternalSourceCurrencyEnum;
    reason: TransactionTransactionSourceInternalSourceReasonEnum;
}
/**
 * A Sample Funds object. This field will be present in the JSON response if and only if `category` is equal to `sample_funds`.
 */
export declare class TransactionTransactionSourceSampleFunds extends SpeakeasyBase {
    /**
     * Where the sample funds came from.
     */
    originator: string;
}
/**
 * A Wire Drawdown Payment Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_intention`.
 */
export declare class TransactionTransactionSourceWireDrawdownPaymentIntention extends SpeakeasyBase {
    accountNumber: string;
    /**
     * The transfer amount in USD cents.
     */
    amount: number;
    messageToRecipient: string;
    routingNumber: string;
    transferId: string;
}
/**
 * A Wire Drawdown Payment Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_rejection`.
 */
export declare class TransactionTransactionSourceWireDrawdownPaymentRejection extends SpeakeasyBase {
    transferId: string;
}
/**
 * A Wire Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_intention`.
 */
export declare class TransactionTransactionSourceWireTransferIntention extends SpeakeasyBase {
    /**
     * The destination account number.
     */
    accountNumber: string;
    /**
     * The transfer amount in USD cents.
     */
    amount: number;
    /**
     * The message that will show on the recipient's bank statement.
     */
    messageToRecipient: string;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN).
     */
    routingNumber: string;
    transferId: string;
}
/**
 * A Wire Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_rejection`.
 */
export declare class TransactionTransactionSourceWireTransferRejection extends SpeakeasyBase {
    transferId: string;
}
/**
 * This is an object giving more details on the network-level event that caused the Transaction. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.
 */
export declare class TransactionTransactionSource extends SpeakeasyBase {
    /**
     * A Account Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `account_transfer_intention`.
     */
    accountTransferIntention: TransactionTransactionSourceAccountTransferIntention;
    /**
     * A ACH Check Conversion object. This field will be present in the JSON response if and only if `category` is equal to `ach_check_conversion`.
     */
    achCheckConversion: TransactionTransactionSourceACHCheckConversion;
    /**
     * A ACH Check Conversion Return object. This field will be present in the JSON response if and only if `category` is equal to `ach_check_conversion_return`.
     */
    achCheckConversionReturn: TransactionTransactionSourceACHCheckConversionReturn;
    /**
     * A ACH Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_intention`.
     */
    achTransferIntention: TransactionTransactionSourceACHTransferIntention;
    /**
     * A ACH Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_rejection`.
     */
    achTransferRejection: TransactionTransactionSourceACHTransferRejection;
    /**
     * A ACH Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_return`.
     */
    achTransferReturn: TransactionTransactionSourceACHTransferReturn;
    /**
     * A Card Dispute Acceptance object. This field will be present in the JSON response if and only if `category` is equal to `card_dispute_acceptance`.
     */
    cardDisputeAcceptance: TransactionTransactionSourceCardDisputeAcceptance;
    /**
     * A Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_refund`.
     */
    cardRefund: TransactionTransactionSourceCardRefund;
    /**
     * A Deprecated Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_route_refund`.
     */
    cardRouteRefund: TransactionTransactionSourceDeprecatedCardRefund;
    /**
     * A Deprecated Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_route_settlement`.
     */
    cardRouteSettlement: TransactionTransactionSourceDeprecatedCardSettlement;
    /**
     * A Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_settlement`.
     */
    cardSettlement: TransactionTransactionSourceCardSettlement;
    /**
     * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: TransactionTransactionSourceCategoryEnum;
    /**
     * A Check Deposit Acceptance object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_acceptance`.
     */
    checkDepositAcceptance: TransactionTransactionSourceCheckDepositAcceptance;
    /**
     * A Check Deposit Return object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_return`.
     */
    checkDepositReturn: TransactionTransactionSourceCheckDepositReturn;
    /**
     * A Check Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_intention`.
     */
    checkTransferIntention: TransactionTransactionSourceCheckTransferIntention;
    /**
     * A Check Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_rejection`.
     */
    checkTransferRejection: TransactionTransactionSourceCheckTransferRejection;
    /**
     * A Check Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_return`.
     */
    checkTransferReturn: TransactionTransactionSourceCheckTransferReturn;
    /**
     * A Check Transfer Stop Payment Request object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_stop_payment_request`.
     */
    checkTransferStopPaymentRequest: TransactionTransactionSourceCheckTransferStopPaymentRequest;
    /**
     * A Dispute Resolution object. This field will be present in the JSON response if and only if `category` is equal to `dispute_resolution`.
     */
    disputeResolution: TransactionTransactionSourceDisputeResolution;
    /**
     * A Empyreal Cash Deposit object. This field will be present in the JSON response if and only if `category` is equal to `empyreal_cash_deposit`.
     */
    empyrealCashDeposit: TransactionTransactionSourceEmpyrealCashDeposit;
    /**
     * A Inbound ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_ach_transfer`.
     */
    inboundAchTransfer: TransactionTransactionSourceInboundACHTransfer;
    /**
     * A Inbound Check object. This field will be present in the JSON response if and only if `category` is equal to `inbound_check`.
     */
    inboundCheck: TransactionTransactionSourceInboundCheck;
    /**
     * A Inbound International ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_international_ach_transfer`.
     */
    inboundInternationalAchTransfer: TransactionTransactionSourceInboundInternationalACHTransfer;
    /**
     * A Inbound Real Time Payments Transfer Confirmation object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_confirmation`.
     */
    inboundRealTimePaymentsTransferConfirmation: TransactionTransactionSourceInboundRealTimePaymentsTransferConfirmation;
    /**
     * A Inbound Wire Drawdown Payment object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
     */
    inboundWireDrawdownPayment: TransactionTransactionSourceInboundWireDrawdownPayment;
    /**
     * A Inbound Wire Drawdown Payment Reversal object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_drawdown_payment_reversal`.
     */
    inboundWireDrawdownPaymentReversal: TransactionTransactionSourceInboundWireDrawdownPaymentReversal;
    /**
     * A Inbound Wire Reversal object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_reversal`.
     */
    inboundWireReversal: TransactionTransactionSourceInboundWireReversal;
    /**
     * A Inbound Wire Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_transfer`.
     */
    inboundWireTransfer: TransactionTransactionSourceInboundWireTransfer;
    /**
     * A Interest Payment object. This field will be present in the JSON response if and only if `category` is equal to `interest_payment`.
     */
    interestPayment: TransactionTransactionSourceInterestPayment;
    /**
     * A Internal Source object. This field will be present in the JSON response if and only if `category` is equal to `internal_source`.
     */
    internalSource: TransactionTransactionSourceInternalSource;
    /**
     * A Sample Funds object. This field will be present in the JSON response if and only if `category` is equal to `sample_funds`.
     */
    sampleFunds: TransactionTransactionSourceSampleFunds;
    /**
     * A Wire Drawdown Payment Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_intention`.
     */
    wireDrawdownPaymentIntention: TransactionTransactionSourceWireDrawdownPaymentIntention;
    /**
     * A Wire Drawdown Payment Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_rejection`.
     */
    wireDrawdownPaymentRejection: TransactionTransactionSourceWireDrawdownPaymentRejection;
    /**
     * A Wire Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_intention`.
     */
    wireTransferIntention: TransactionTransactionSourceWireTransferIntention;
    /**
     * A Wire Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_rejection`.
     */
    wireTransferRejection: TransactionTransactionSourceWireTransferRejection;
}
/**
 * A constant representing the object's type. For this resource it will always be `transaction`.
 */
export declare enum TransactionTypeEnum {
    Transaction = "transaction"
}
/**
 * Transactions are the immutable additions and removals of money from your bank account. They're the equivalent of line items on your bank statement.
 */
export declare class Transaction extends SpeakeasyBase {
    /**
     * The identifier for the Account the Transaction belongs to.
     */
    accountId: string;
    /**
     * The Transaction amount in the minor unit of its currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Transaction occured.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Transaction's currency. This will match the currency on the Transcation's Account.
     */
    currency: TransactionCurrencyEnum;
    /**
     * For a Transaction related to a transfer, this is the description you provide. For a Transaction related to a payment, this is the description the vendor provides.
     */
    description: string;
    /**
     * The Transaction identifier.
     */
    id: string;
    /**
     * The identifier for the route this Transaction came through. Routes are things like cards and ACH details.
     */
    routeId: string;
    /**
     * The type of the route this Transaction came through.
     */
    routeType: string;
    /**
     * This is an object giving more details on the network-level event that caused the Transaction. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.
     */
    source: TransactionTransactionSource;
    /**
     * A constant representing the object's type. For this resource it will always be `transaction`.
     */
    type: TransactionTypeEnum;
}
