import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined Transaction's currency. This will match the currency on the Declined Transcation's Account.
 */
export declare enum DeclinedTransactionCurrencyEnum {
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
export declare enum DeclinedTransactionDeclinedTransactionSourceACHDeclineReasonEnum {
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
export declare class DeclinedTransactionDeclinedTransactionSourceACHDecline extends SpeakeasyBase {
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
    reason: DeclinedTransactionDeclinedTransactionSourceACHDeclineReasonEnum;
    receiverIdNumber: string;
    receiverName: string;
    traceNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum DeclinedTransactionDeclinedTransactionSourceCardDeclineCurrencyEnum {
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
export declare enum DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkEnum {
    Visa = "visa"
}
/**
 * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
 */
export declare enum DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaElectronicCommerceIndicatorEnum {
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
export declare enum DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum {
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
export declare class DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisa extends SpeakeasyBase {
    /**
     * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
     */
    electronicCommerceIndicator: DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaElectronicCommerceIndicatorEnum;
    /**
     * The method used to enter the cardholder's primary account number and card expiration date
     */
    pointOfServiceEntryMode: DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum;
}
/**
 * Fields specific to the `network`
 */
export declare class DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetails extends SpeakeasyBase {
    /**
     * Fields specific to the `visa` network
     */
    visa: DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisa;
}
/**
 * Why the transaction was declined.
 */
export declare enum DeclinedTransactionDeclinedTransactionSourceCardDeclineReasonEnum {
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
export declare class DeclinedTransactionDeclinedTransactionSourceCardDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: DeclinedTransactionDeclinedTransactionSourceCardDeclineCurrencyEnum;
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
    network: DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkEnum;
    /**
     * Fields specific to the `network`
     */
    networkDetails: DeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetails;
    /**
     * The identifier of the Real-Time Decision sent to approve or decline this transaction.
     */
    realTimeDecisionId: string;
    /**
     * Why the transaction was declined.
     */
    reason: DeclinedTransactionDeclinedTransactionSourceCardDeclineReasonEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum DeclinedTransactionDeclinedTransactionSourceDeprecatedCardDeclineCurrencyEnum {
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
export declare class DeclinedTransactionDeclinedTransactionSourceDeprecatedCardDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: DeclinedTransactionDeclinedTransactionSourceDeprecatedCardDeclineCurrencyEnum;
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
export declare enum DeclinedTransactionDeclinedTransactionSourceCategoryEnum {
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
export declare enum DeclinedTransactionDeclinedTransactionSourceCheckDeclineReasonEnum {
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
export declare class DeclinedTransactionDeclinedTransactionSourceCheckDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    auxiliaryOnUs: string;
    /**
     * Why the check was declined.
     */
    reason: DeclinedTransactionDeclinedTransactionSourceCheckDeclineReasonEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the declined transfer's currency. This will always be "USD" for a Real Time Payments transfer.
 */
export declare enum DeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineCurrencyEnum {
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
export declare enum DeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineReasonEnum {
    AccountNumberCanceled = "account_number_canceled",
    AccountNumberDisabled = "account_number_disabled",
    GroupLocked = "group_locked",
    EntityNotActive = "entity_not_active",
    RealTimePaymentsNotEnabled = "real_time_payments_not_enabled"
}
/**
 * A Inbound Real Time Payments Transfer Decline object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_decline`.
 */
export declare class DeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDecline extends SpeakeasyBase {
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
    currency: DeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineCurrencyEnum;
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
    reason: DeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineReasonEnum;
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
export declare class DeclinedTransactionDeclinedTransactionSourceInternationalACHDecline extends SpeakeasyBase {
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
export declare class DeclinedTransactionDeclinedTransactionSource extends SpeakeasyBase {
    /**
     * A ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `ach_decline`.
     */
    achDecline: DeclinedTransactionDeclinedTransactionSourceACHDecline;
    /**
     * A Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_decline`.
     */
    cardDecline: DeclinedTransactionDeclinedTransactionSourceCardDecline;
    /**
     * A Deprecated Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_route_decline`.
     */
    cardRouteDecline: DeclinedTransactionDeclinedTransactionSourceDeprecatedCardDecline;
    /**
     * The type of decline that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: DeclinedTransactionDeclinedTransactionSourceCategoryEnum;
    /**
     * A Check Decline object. This field will be present in the JSON response if and only if `category` is equal to `check_decline`.
     */
    checkDecline: DeclinedTransactionDeclinedTransactionSourceCheckDecline;
    /**
     * A Inbound Real Time Payments Transfer Decline object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_decline`.
     */
    inboundRealTimePaymentsTransferDecline: DeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDecline;
    /**
     * A International ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `international_ach_decline`.
     */
    internationalAchDecline: DeclinedTransactionDeclinedTransactionSourceInternationalACHDecline;
}
/**
 * A constant representing the object's type. For this resource it will always be `declined_transaction`.
 */
export declare enum DeclinedTransactionTypeEnum {
    DeclinedTransaction = "declined_transaction"
}
/**
 * Declined Transactions are refused additions and removals of money from your bank account. For example, Declined Transactions are caused when your Account has an insufficient balance or your Limits are triggered.
 */
export declare class DeclinedTransaction extends SpeakeasyBase {
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
    currency: DeclinedTransactionCurrencyEnum;
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
    source: DeclinedTransactionDeclinedTransactionSource;
    /**
     * A constant representing the object's type. For this resource it will always be `declined_transaction`.
     */
    type: DeclinedTransactionTypeEnum;
}
