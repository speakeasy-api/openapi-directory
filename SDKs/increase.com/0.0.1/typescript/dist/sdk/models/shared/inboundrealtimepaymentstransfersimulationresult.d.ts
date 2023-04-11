import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined Transaction's currency. This will match the currency on the Declined Transcation's Account.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * Why the ACH transfer was declined.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDeclineReasonEnum {
    AchRouteCanceled = "ach_route_canceled",
    AchRouteDisabled = "ach_route_disabled",
    BreachesLimit = "breaches_limit",
    CreditEntryRefusedByReceiver = "credit_entry_refused_by_receiver",
    DuplicateReturn = "duplicate_return",
    EntityNotActive = "entity_not_active",
    TransactionNotAllowed = "transaction_not_allowed",
    GroupLocked = "group_locked",
    InsufficientFunds = "insufficient_funds",
    NoAchRoute = "no_ach_route",
    OriginatorRequest = "originator_request"
}
/**
 * A ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `ach_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    originatorCompanyDescriptiveDate: string;
    originatorCompanyDiscretionaryData: string;
    originatorCompanyId: string;
    originatorCompanyName: string;
    /**
     * Why the ACH transfer was declined.
     */
    reason: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDeclineReasonEnum;
    receiverIdNumber: string;
    receiverName: string;
    traceNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The payment network used to process this card authorization
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkEnum {
    Visa = "visa"
}
/**
 * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaElectronicCommerceIndicatorEnum {
    MailPhoneOrder = "mail_phone_order",
    Recurring = "recurring",
    Installment = "installment",
    UnknownMailPhoneOrder = "unknown_mail_phone_order",
    SecureElectronicCommerce = "secure_electronic_commerce",
    NonAuthenticatedSecurityTransactionAt3dsCapableMerchant = "non_authenticated_security_transaction_at_3ds_capable_merchant",
    NonAuthenticatedSecurityTransaction = "non_authenticated_security_transaction",
    NonSecureTransaction = "non_secure_transaction"
}
/**
 * The method used to enter the cardholder's primary account number and card expiration date
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum {
    Manual = "manual",
    MagneticStripeNoCvv = "magnetic_stripe_no_cvv",
    OpticalCode = "optical_code",
    IntegratedCircuitCard = "integrated_circuit_card",
    Contactless = "contactless",
    CredentialOnFile = "credential_on_file",
    MagneticStripe = "magnetic_stripe",
    ContactlessMagneticStripe = "contactless_magnetic_stripe",
    IntegratedCircuitCardNoCvv = "integrated_circuit_card_no_cvv"
}
/**
 * Fields specific to the `visa` network
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisa extends SpeakeasyBase {
    /**
     * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
     */
    electronicCommerceIndicator: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaElectronicCommerceIndicatorEnum;
    /**
     * The method used to enter the cardholder's primary account number and card expiration date
     */
    pointOfServiceEntryMode: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum;
}
/**
 * Fields specific to the `network`
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetails extends SpeakeasyBase {
    /**
     * Fields specific to the `visa` network
     */
    visa: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisa;
}
/**
 * Why the transaction was declined.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineReasonEnum {
    CardNotActive = "card_not_active",
    EntityNotActive = "entity_not_active",
    GroupLocked = "group_locked",
    InsufficientFunds = "insufficient_funds",
    Cvv2Mismatch = "cvv2_mismatch",
    TransactionNotAllowed = "transaction_not_allowed",
    BreachesLimit = "breaches_limit",
    WebhookDeclined = "webhook_declined",
    WebhookTimedOut = "webhook_timed_out",
    DeclinedByStandInProcessing = "declined_by_stand_in_processing"
}
/**
 * A Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineCurrencyEnum;
    /**
     * If the authorization was attempted using a Digital Wallet Token (such as an Apple Pay purchase), the identifier of the token that was used.
     */
    digitalWalletTokenId: string;
    /**
     * The merchant identifier (commonly abbreviated as MID) of the merchant the card is transacting with.
     */
    merchantAcceptorId: string;
    /**
     * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the card is transacting with.
     */
    merchantCategoryCode: string;
    /**
     * The city the merchant resides in.
     */
    merchantCity: string;
    /**
     * The country the merchant resides in.
     */
    merchantCountry: string;
    /**
     * The merchant descriptor of the merchant the card is transacting with.
     */
    merchantDescriptor: string;
    /**
     * The state the merchant resides in.
     */
    merchantState: string;
    /**
     * The payment network used to process this card authorization
     */
    network: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkEnum;
    /**
     * Fields specific to the `network`
     */
    networkDetails: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetails;
    /**
     * The identifier of the Real-Time Decision sent to approve or decline this transaction.
     */
    realTimeDecisionId: string;
    /**
     * Why the transaction was declined.
     */
    reason: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineReasonEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDeclineCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Deprecated Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_route_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDeclineCurrencyEnum;
    merchantAcceptorId: string;
    merchantCategoryCode: string;
    merchantCity: string;
    merchantCountry: string;
    merchantDescriptor: string;
    merchantState: string;
}
/**
 * The type of decline that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCategoryEnum {
    AchDecline = "ach_decline",
    CardDecline = "card_decline",
    CheckDecline = "check_decline",
    InboundRealTimePaymentsTransferDecline = "inbound_real_time_payments_transfer_decline",
    InternationalAchDecline = "international_ach_decline",
    CardRouteDecline = "card_route_decline",
    Other = "other"
}
/**
 * Why the check was declined.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDeclineReasonEnum {
    AchRouteCanceled = "ach_route_canceled",
    AchRouteDisabled = "ach_route_disabled",
    BreachesLimit = "breaches_limit",
    EntityNotActive = "entity_not_active",
    GroupLocked = "group_locked",
    InsufficientFunds = "insufficient_funds",
    UnableToLocateAccount = "unable_to_locate_account",
    UnableToProcess = "unable_to_process",
    ReferToImage = "refer_to_image",
    StopPaymentRequested = "stop_payment_requested",
    Returned = "returned"
}
/**
 * A Check Decline object. This field will be present in the JSON response if and only if `category` is equal to `check_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    auxiliaryOnUs: string;
    /**
     * Why the check was declined.
     */
    reason: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDeclineReasonEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the declined transfer's currency. This will always be "USD" for a Real Time Payments transfer.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * Why the transfer was declined.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineReasonEnum {
    AccountNumberCanceled = "account_number_canceled",
    AccountNumberDisabled = "account_number_disabled",
    GroupLocked = "group_locked",
    EntityNotActive = "entity_not_active",
    RealTimePaymentsNotEnabled = "real_time_payments_not_enabled"
}
/**
 * A Inbound Real Time Payments Transfer Decline object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The name the sender of the transfer specified as the recipient of the transfer.
     */
    creditorName: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the declined transfer's currency. This will always be "USD" for a Real Time Payments transfer.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineCurrencyEnum;
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
     * Why the transfer was declined.
     */
    reason: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineReasonEnum;
    /**
     * Additional information included with the transfer.
     */
    remittanceInformation: string;
    /**
     * The Real Time Payments network identification of the declined transfer.
     */
    transactionIdentification: string;
}
/**
 * A International ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `international_ach_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInternationalACHDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
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
 * This is an object giving more details on the network-level event that caused the Declined Transaction. For example, for a card transaction this lists the merchant's industry and location. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSource extends SpeakeasyBase {
    /**
     * A ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `ach_decline`.
     */
    achDecline: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDecline;
    /**
     * A Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_decline`.
     */
    cardDecline: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDecline;
    /**
     * A Deprecated Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_route_decline`.
     */
    cardRouteDecline: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDecline;
    /**
     * The type of decline that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCategoryEnum;
    /**
     * A Check Decline object. This field will be present in the JSON response if and only if `category` is equal to `check_decline`.
     */
    checkDecline: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDecline;
    /**
     * A Inbound Real Time Payments Transfer Decline object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_decline`.
     */
    inboundRealTimePaymentsTransferDecline: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDecline;
    /**
     * A International ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `international_ach_decline`.
     */
    internationalAchDecline: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSourceInternationalACHDecline;
}
/**
 * A constant representing the object's type. For this resource it will always be `declined_transaction`.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionTypeEnum {
    DeclinedTransaction = "declined_transaction"
}
/**
 * If the Real Time Payments Transfer attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: inbound_real_time_payments_transfer_decline`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultDeclinedTransaction extends SpeakeasyBase {
    /**
     * The identifier for the Account the Declined Transaction belongs to.
     */
    accountId: string;
    /**
     * The Declined Transaction amount in the minor unit of its currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Transaction occured.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined Transaction's currency. This will match the currency on the Declined Transcation's Account.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionCurrencyEnum;
    /**
     * This is the description the vendor provides.
     */
    description: string;
    /**
     * The Declined Transaction identifier.
     */
    id: string;
    /**
     * The identifier for the route this Declined Transaction came through. Routes are things like cards and ACH details.
     */
    routeId: string;
    /**
     * The type of the route this Declined Transaction came through.
     */
    routeType: string;
    /**
     * This is an object giving more details on the network-level event that caused the Declined Transaction. For example, for a card transaction this lists the merchant's industry and location. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.
     */
    source: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionDeclinedTransactionSource;
    /**
     * A constant representing the object's type. For this resource it will always be `declined_transaction`.
     */
    type: InboundRealTimePaymentsTransferSimulationResultDeclinedTransactionTypeEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Transaction's currency. This will match the currency on the Transcation's Account.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionCurrencyEnum {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceAccountTransferIntentionCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceAccountTransferIntention extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceAccountTransferIntentionCurrencyEnum;
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHCheckConversion extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHCheckConversionReturn extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferIntention extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferRejection extends SpeakeasyBase {
    /**
     * The identifier of the ACH Transfer that led to this Transaction.
     */
    transferId: string;
}
/**
 * Why the ACH Transfer was returned.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferReturnReturnReasonCodeEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferReturn extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * Why the ACH Transfer was returned.
     */
    returnReasonCode: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferReturnReturnReasonCodeEnum;
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardDisputeAcceptance extends SpeakeasyBase {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardRefundCurrencyEnum {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardRefundTypeEnum {
    CardRefund = "card_refund"
}
/**
 * A Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_refund`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardRefund extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardRefundCurrencyEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `card_refund`.
     */
    type: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardRefundTypeEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the refund currency.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardRefundCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardRefund extends SpeakeasyBase {
    /**
     * The refunded amount in the minor unit of the refunded currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the refund currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardRefundCurrencyEnum;
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardSettlementCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardSettlement extends SpeakeasyBase {
    /**
     * The settled amount in the minor unit of the settlement currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the settlement currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardSettlementCurrencyEnum;
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardSettlementCurrencyEnum {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardSettlementTypeEnum {
    CardSettlement = "card_settlement"
}
/**
 * A Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_settlement`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardSettlement extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's settlement currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's settlement currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardSettlementCurrencyEnum;
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
    type: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardSettlementTypeEnum;
}
/**
 * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCategoryEnum {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositAcceptanceCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositAcceptance extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositAcceptanceCurrencyEnum;
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositReturnCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositReturnReturnReasonEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositReturn extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositReturnCurrencyEnum;
    returnReason: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositReturnReturnReasonEnum;
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferIntentionCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferIntention extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferIntentionCurrencyEnum;
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferRejection extends SpeakeasyBase {
    /**
     * The identifier of the Check Transfer that led to this Transaction.
     */
    transferId: string;
}
/**
 * A Check Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_return`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferReturn extends SpeakeasyBase {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferStopPaymentRequestTypeEnum {
    CheckTransferStopPaymentRequest = "check_transfer_stop_payment_request"
}
/**
 * A Check Transfer Stop Payment Request object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_stop_payment_request`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferStopPaymentRequest extends SpeakeasyBase {
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
    type: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferStopPaymentRequestTypeEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDisputeResolutionCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDisputeResolution extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDisputeResolutionCurrencyEnum;
    /**
     * The identifier of the Transaction that was disputed.
     */
    disputedTransactionId: string;
}
/**
 * A Empyreal Cash Deposit object. This field will be present in the JSON response if and only if `category` is equal to `empyreal_cash_deposit`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceEmpyrealCashDeposit extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundACHTransfer extends SpeakeasyBase {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundCheckCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundCheck extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundCheckCurrencyEnum;
}
/**
 * A Inbound International ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_international_ach_transfer`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundInternationalACHTransfer extends SpeakeasyBase {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundRealTimePaymentsTransferConfirmationCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundRealTimePaymentsTransferConfirmation extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundRealTimePaymentsTransferConfirmationCurrencyEnum;
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireDrawdownPayment extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireDrawdownPaymentReversal extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireReversal extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireTransfer extends SpeakeasyBase {
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInterestPaymentCurrencyEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInterestPayment extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInterestPaymentCurrencyEnum;
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
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInternalSourceCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInternalSourceReasonEnum {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInternalSource extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction currency.
     */
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInternalSourceCurrencyEnum;
    reason: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInternalSourceReasonEnum;
}
/**
 * A Sample Funds object. This field will be present in the JSON response if and only if `category` is equal to `sample_funds`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceSampleFunds extends SpeakeasyBase {
    /**
     * Where the sample funds came from.
     */
    originator: string;
}
/**
 * A Wire Drawdown Payment Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_intention`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireDrawdownPaymentIntention extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireDrawdownPaymentRejection extends SpeakeasyBase {
    transferId: string;
}
/**
 * A Wire Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_intention`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireTransferIntention extends SpeakeasyBase {
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
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireTransferRejection extends SpeakeasyBase {
    transferId: string;
}
/**
 * This is an object giving more details on the network-level event that caused the Transaction. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSource extends SpeakeasyBase {
    /**
     * A Account Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `account_transfer_intention`.
     */
    accountTransferIntention: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceAccountTransferIntention;
    /**
     * A ACH Check Conversion object. This field will be present in the JSON response if and only if `category` is equal to `ach_check_conversion`.
     */
    achCheckConversion: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHCheckConversion;
    /**
     * A ACH Check Conversion Return object. This field will be present in the JSON response if and only if `category` is equal to `ach_check_conversion_return`.
     */
    achCheckConversionReturn: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHCheckConversionReturn;
    /**
     * A ACH Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_intention`.
     */
    achTransferIntention: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferIntention;
    /**
     * A ACH Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_rejection`.
     */
    achTransferRejection: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferRejection;
    /**
     * A ACH Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_return`.
     */
    achTransferReturn: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceACHTransferReturn;
    /**
     * A Card Dispute Acceptance object. This field will be present in the JSON response if and only if `category` is equal to `card_dispute_acceptance`.
     */
    cardDisputeAcceptance: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardDisputeAcceptance;
    /**
     * A Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_refund`.
     */
    cardRefund: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardRefund;
    /**
     * A Deprecated Card Refund object. This field will be present in the JSON response if and only if `category` is equal to `card_route_refund`.
     */
    cardRouteRefund: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardRefund;
    /**
     * A Deprecated Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_route_settlement`.
     */
    cardRouteSettlement: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDeprecatedCardSettlement;
    /**
     * A Card Settlement object. This field will be present in the JSON response if and only if `category` is equal to `card_settlement`.
     */
    cardSettlement: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCardSettlement;
    /**
     * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCategoryEnum;
    /**
     * A Check Deposit Acceptance object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_acceptance`.
     */
    checkDepositAcceptance: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositAcceptance;
    /**
     * A Check Deposit Return object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_return`.
     */
    checkDepositReturn: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckDepositReturn;
    /**
     * A Check Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_intention`.
     */
    checkTransferIntention: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferIntention;
    /**
     * A Check Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_rejection`.
     */
    checkTransferRejection: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferRejection;
    /**
     * A Check Transfer Return object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_return`.
     */
    checkTransferReturn: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferReturn;
    /**
     * A Check Transfer Stop Payment Request object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_stop_payment_request`.
     */
    checkTransferStopPaymentRequest: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceCheckTransferStopPaymentRequest;
    /**
     * A Dispute Resolution object. This field will be present in the JSON response if and only if `category` is equal to `dispute_resolution`.
     */
    disputeResolution: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceDisputeResolution;
    /**
     * A Empyreal Cash Deposit object. This field will be present in the JSON response if and only if `category` is equal to `empyreal_cash_deposit`.
     */
    empyrealCashDeposit: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceEmpyrealCashDeposit;
    /**
     * A Inbound ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_ach_transfer`.
     */
    inboundAchTransfer: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundACHTransfer;
    /**
     * A Inbound Check object. This field will be present in the JSON response if and only if `category` is equal to `inbound_check`.
     */
    inboundCheck: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundCheck;
    /**
     * A Inbound International ACH Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_international_ach_transfer`.
     */
    inboundInternationalAchTransfer: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundInternationalACHTransfer;
    /**
     * A Inbound Real Time Payments Transfer Confirmation object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_confirmation`.
     */
    inboundRealTimePaymentsTransferConfirmation: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundRealTimePaymentsTransferConfirmation;
    /**
     * A Inbound Wire Drawdown Payment object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
     */
    inboundWireDrawdownPayment: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireDrawdownPayment;
    /**
     * A Inbound Wire Drawdown Payment Reversal object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_drawdown_payment_reversal`.
     */
    inboundWireDrawdownPaymentReversal: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireDrawdownPaymentReversal;
    /**
     * A Inbound Wire Reversal object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_reversal`.
     */
    inboundWireReversal: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireReversal;
    /**
     * A Inbound Wire Transfer object. This field will be present in the JSON response if and only if `category` is equal to `inbound_wire_transfer`.
     */
    inboundWireTransfer: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInboundWireTransfer;
    /**
     * A Interest Payment object. This field will be present in the JSON response if and only if `category` is equal to `interest_payment`.
     */
    interestPayment: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInterestPayment;
    /**
     * A Internal Source object. This field will be present in the JSON response if and only if `category` is equal to `internal_source`.
     */
    internalSource: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceInternalSource;
    /**
     * A Sample Funds object. This field will be present in the JSON response if and only if `category` is equal to `sample_funds`.
     */
    sampleFunds: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceSampleFunds;
    /**
     * A Wire Drawdown Payment Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_intention`.
     */
    wireDrawdownPaymentIntention: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireDrawdownPaymentIntention;
    /**
     * A Wire Drawdown Payment Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_rejection`.
     */
    wireDrawdownPaymentRejection: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireDrawdownPaymentRejection;
    /**
     * A Wire Transfer Intention object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_intention`.
     */
    wireTransferIntention: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireTransferIntention;
    /**
     * A Wire Transfer Rejection object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_rejection`.
     */
    wireTransferRejection: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSourceWireTransferRejection;
}
/**
 * A constant representing the object's type. For this resource it will always be `transaction`.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTransactionTypeEnum {
    Transaction = "transaction"
}
/**
 * If the Real Time Payments Transfer attempt succeeds, this will contain the resulting [Transaction](#transactions) object. The Transaction's `source` will be of `category: inbound_real_time_payments_transfer_confirmation`.
 */
export declare class InboundRealTimePaymentsTransferSimulationResultTransaction extends SpeakeasyBase {
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
    currency: InboundRealTimePaymentsTransferSimulationResultTransactionCurrencyEnum;
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
    source: InboundRealTimePaymentsTransferSimulationResultTransactionTransactionSource;
    /**
     * A constant representing the object's type. For this resource it will always be `transaction`.
     */
    type: InboundRealTimePaymentsTransferSimulationResultTransactionTypeEnum;
}
/**
 * A constant representing the object's type. For this resource it will always be `inbound_real_time_payments_transfer_simulation_result`.
 */
export declare enum InboundRealTimePaymentsTransferSimulationResultTypeEnum {
    InboundRealTimePaymentsTransferSimulationResult = "inbound_real_time_payments_transfer_simulation_result"
}
/**
 * The results of an inbound Real Time Payments Transfer simulation.
 */
export declare class InboundRealTimePaymentsTransferSimulationResult extends SpeakeasyBase {
    /**
     * If the Real Time Payments Transfer attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: inbound_real_time_payments_transfer_decline`.
     */
    declinedTransaction: InboundRealTimePaymentsTransferSimulationResultDeclinedTransaction;
    /**
     * If the Real Time Payments Transfer attempt succeeds, this will contain the resulting [Transaction](#transactions) object. The Transaction's `source` will be of `category: inbound_real_time_payments_transfer_confirmation`.
     */
    transaction: InboundRealTimePaymentsTransferSimulationResultTransaction;
    /**
     * A constant representing the object's type. For this resource it will always be `inbound_real_time_payments_transfer_simulation_result`.
     */
    type: InboundRealTimePaymentsTransferSimulationResultTypeEnum;
}
