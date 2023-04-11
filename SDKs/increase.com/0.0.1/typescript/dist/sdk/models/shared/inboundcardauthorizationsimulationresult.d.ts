import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined Transaction's currency. This will match the currency on the Declined Transcation's Account.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionCurrencyEnum {
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
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDeclineReasonEnum {
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDecline extends SpeakeasyBase {
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
    reason: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDeclineReasonEnum;
    receiverIdNumber: string;
    receiverName: string;
    traceNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineCurrencyEnum {
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
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkEnum {
    Visa = "visa"
}
/**
 * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaElectronicCommerceIndicatorEnum {
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
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum {
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisa extends SpeakeasyBase {
    /**
     * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
     */
    electronicCommerceIndicator: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaElectronicCommerceIndicatorEnum;
    /**
     * The method used to enter the cardholder's primary account number and card expiration date
     */
    pointOfServiceEntryMode: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisaPointOfServiceEntryModeEnum;
}
/**
 * Fields specific to the `network`
 */
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetails extends SpeakeasyBase {
    /**
     * Fields specific to the `visa` network
     */
    visa: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetailsVisa;
}
/**
 * Why the transaction was declined.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineReasonEnum {
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineCurrencyEnum;
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
    network: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkEnum;
    /**
     * Fields specific to the `network`
     */
    networkDetails: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineNetworkDetails;
    /**
     * The identifier of the Real-Time Decision sent to approve or decline this transaction.
     */
    realTimeDecisionId: string;
    /**
     * Why the transaction was declined.
     */
    reason: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDeclineReasonEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDeclineCurrencyEnum {
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDeclineCurrencyEnum;
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
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCategoryEnum {
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
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDeclineReasonEnum {
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDecline extends SpeakeasyBase {
    /**
     * The declined amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    auxiliaryOnUs: string;
    /**
     * Why the check was declined.
     */
    reason: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDeclineReasonEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the declined transfer's currency. This will always be "USD" for a Real Time Payments transfer.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineCurrencyEnum {
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
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineReasonEnum {
    AccountNumberCanceled = "account_number_canceled",
    AccountNumberDisabled = "account_number_disabled",
    GroupLocked = "group_locked",
    EntityNotActive = "entity_not_active",
    RealTimePaymentsNotEnabled = "real_time_payments_not_enabled"
}
/**
 * A Inbound Real Time Payments Transfer Decline object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_decline`.
 */
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDecline extends SpeakeasyBase {
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
    currency: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineCurrencyEnum;
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
    reason: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDeclineReasonEnum;
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInternationalACHDecline extends SpeakeasyBase {
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
export declare class InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSource extends SpeakeasyBase {
    /**
     * A ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `ach_decline`.
     */
    achDecline: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceACHDecline;
    /**
     * A Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_decline`.
     */
    cardDecline: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCardDecline;
    /**
     * A Deprecated Card Decline object. This field will be present in the JSON response if and only if `category` is equal to `card_route_decline`.
     */
    cardRouteDecline: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceDeprecatedCardDecline;
    /**
     * The type of decline that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCategoryEnum;
    /**
     * A Check Decline object. This field will be present in the JSON response if and only if `category` is equal to `check_decline`.
     */
    checkDecline: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceCheckDecline;
    /**
     * A Inbound Real Time Payments Transfer Decline object. This field will be present in the JSON response if and only if `category` is equal to `inbound_real_time_payments_transfer_decline`.
     */
    inboundRealTimePaymentsTransferDecline: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInboundRealTimePaymentsTransferDecline;
    /**
     * A International ACH Decline object. This field will be present in the JSON response if and only if `category` is equal to `international_ach_decline`.
     */
    internationalAchDecline: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSourceInternationalACHDecline;
}
/**
 * A constant representing the object's type. For this resource it will always be `declined_transaction`.
 */
export declare enum InboundCardAuthorizationSimulationResultDeclinedTransactionTypeEnum {
    DeclinedTransaction = "declined_transaction"
}
/**
 * If the authorization attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: card_decline`.
 */
export declare class InboundCardAuthorizationSimulationResultDeclinedTransaction extends SpeakeasyBase {
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
    currency: InboundCardAuthorizationSimulationResultDeclinedTransactionCurrencyEnum;
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
    source: InboundCardAuthorizationSimulationResultDeclinedTransactionDeclinedTransactionSource;
    /**
     * A constant representing the object's type. For this resource it will always be `declined_transaction`.
     */
    type: InboundCardAuthorizationSimulationResultDeclinedTransactionTypeEnum;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending Transaction's currency. This will match the currency on the Pending Transcation's Account.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionCurrencyEnum {
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
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceAccountTransferInstructionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Account Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `account_transfer_instruction`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceAccountTransferInstruction extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceAccountTransferInstructionCurrencyEnum;
    /**
     * The identifier of the Account Transfer that led to this Pending Transaction.
     */
    transferId: string;
}
/**
 * A ACH Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_instruction`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceACHTransferInstruction extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The identifier of the ACH Transfer that led to this Pending Transaction.
     */
    transferId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationCurrencyEnum {
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
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkEnum {
    Visa = "visa"
}
/**
 * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaElectronicCommerceIndicatorEnum {
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
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaPointOfServiceEntryModeEnum {
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
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisa extends SpeakeasyBase {
    /**
     * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
     */
    electronicCommerceIndicator: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaElectronicCommerceIndicatorEnum;
    /**
     * The method used to enter the cardholder's primary account number and card expiration date
     */
    pointOfServiceEntryMode: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaPointOfServiceEntryModeEnum;
}
/**
 * Fields specific to the `network`
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetails extends SpeakeasyBase {
    /**
     * Fields specific to the `visa` network
     */
    visa: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisa;
}
/**
 * A Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_authorization`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorization extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationCurrencyEnum;
    /**
     * If the authorization was made via a Digital Wallet Token (such as an Apple Pay purchase), the identifier of the token that was used.
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
     * The payment network used to process this card authorization
     */
    network: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkEnum;
    /**
     * Fields specific to the `network`
     */
    networkDetails: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetails;
    /**
     * The identifier of the Real-Time Decision sent to approve or decline this transaction.
     */
    realTimeDecisionId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceDeprecatedCardAuthorizationCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Deprecated Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_route_authorization`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceDeprecatedCardAuthorization extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceDeprecatedCardAuthorizationCurrencyEnum;
    merchantAcceptorId: string;
    merchantCategoryCode: string;
    merchantCity: string;
    merchantCountry: string;
    merchantDescriptor: string;
    merchantState: string;
}
/**
 * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCategoryEnum {
    AccountTransferInstruction = "account_transfer_instruction",
    AchTransferInstruction = "ach_transfer_instruction",
    CardAuthorization = "card_authorization",
    CheckDepositInstruction = "check_deposit_instruction",
    CheckTransferInstruction = "check_transfer_instruction",
    InboundFundsHold = "inbound_funds_hold",
    CardRouteAuthorization = "card_route_authorization",
    RealTimePaymentsTransferInstruction = "real_time_payments_transfer_instruction",
    WireDrawdownPaymentInstruction = "wire_drawdown_payment_instruction",
    WireTransferInstruction = "wire_transfer_instruction",
    Other = "other"
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckDepositInstructionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Check Deposit Instruction object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_instruction`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckDepositInstruction extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The identifier of the File containing the image of the back of the check that was deposited.
     */
    backImageFileId: string;
    /**
     * The identifier of the Check Deposit.
     */
    checkDepositId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckDepositInstructionCurrencyEnum;
    /**
     * The identifier of the File containing the image of the front of the check that was deposited.
     */
    frontImageFileId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckTransferInstructionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A Check Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_instruction`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckTransferInstruction extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckTransferInstructionCurrencyEnum;
    /**
     * The identifier of the Check Transfer that led to this Pending Transaction.
     */
    transferId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the hold's currency.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceInboundFundsHoldCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The status of the hold.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceInboundFundsHoldStatusEnum {
    Held = "held",
    Complete = "complete"
}
/**
 * A Inbound Funds Hold object. This field will be present in the JSON response if and only if `category` is equal to `inbound_funds_hold`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceInboundFundsHold extends SpeakeasyBase {
    /**
     * The held amount in the minor unit of the account's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * When the hold will be released automatically. Certain conditions may cause it to be released before this time.
     */
    automaticallyReleasesAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the hold's currency.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceInboundFundsHoldCurrencyEnum;
    /**
     * The ID of the Transaction for which funds were held.
     */
    heldTransactionId: string;
    /**
     * When the hold was released (if it has been released).
     */
    releasedAt: Date;
    /**
     * The status of the hold.
     */
    status: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceInboundFundsHoldStatusEnum;
}
/**
 * A Wire Drawdown Payment Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_instruction`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceWireDrawdownPaymentInstruction extends SpeakeasyBase {
    accountNumber: string;
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    messageToRecipient: string;
    routingNumber: string;
}
/**
 * A Wire Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_instruction`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceWireTransferInstruction extends SpeakeasyBase {
    accountNumber: string;
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    messageToRecipient: string;
    routingNumber: string;
    transferId: string;
}
/**
 * This is an object giving more details on the network-level event that caused the Pending Transaction. For example, for a card transaction this lists the merchant's industry and location.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSource extends SpeakeasyBase {
    /**
     * A Account Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `account_transfer_instruction`.
     */
    accountTransferInstruction: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceAccountTransferInstruction;
    /**
     * A ACH Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    achTransferInstruction: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceACHTransferInstruction;
    /**
     * A Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_authorization`.
     */
    cardAuthorization: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCardAuthorization;
    /**
     * A Deprecated Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_route_authorization`.
     */
    cardRouteAuthorization: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceDeprecatedCardAuthorization;
    /**
     * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCategoryEnum;
    /**
     * A Check Deposit Instruction object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_instruction`.
     */
    checkDepositInstruction: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckDepositInstruction;
    /**
     * A Check Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_instruction`.
     */
    checkTransferInstruction: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceCheckTransferInstruction;
    /**
     * A Inbound Funds Hold object. This field will be present in the JSON response if and only if `category` is equal to `inbound_funds_hold`.
     */
    inboundFundsHold: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceInboundFundsHold;
    /**
     * A Wire Drawdown Payment Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_instruction`.
     */
    wireDrawdownPaymentInstruction: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceWireDrawdownPaymentInstruction;
    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    wireTransferInstruction: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSourceWireTransferInstruction;
}
/**
 * Whether the Pending Transaction has been confirmed and has an associated Transaction.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionStatusEnum {
    Pending = "pending",
    Complete = "complete"
}
/**
 * A constant representing the object's type. For this resource it will always be `pending_transaction`.
 */
export declare enum InboundCardAuthorizationSimulationResultPendingTransactionTypeEnum {
    PendingTransaction = "pending_transaction"
}
/**
 * If the authorization attempt succeeds, this will contain the resulting Pending Transaction object. The Pending Transaction's `source` will be of `category: card_authorization`.
 */
export declare class InboundCardAuthorizationSimulationResultPendingTransaction extends SpeakeasyBase {
    /**
     * The identifier for the account this Pending Transaction belongs to.
     */
    accountId: string;
    /**
     * The Pending Transaction amount in the minor unit of its currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending Transaction occured.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending Transaction's currency. This will match the currency on the Pending Transcation's Account.
     */
    currency: InboundCardAuthorizationSimulationResultPendingTransactionCurrencyEnum;
    /**
     * For a Pending Transaction related to a transfer, this is the description you provide. For a Pending Transaction related to a payment, this is the description the vendor provides.
     */
    description: string;
    /**
     * The Pending Transaction identifier.
     */
    id: string;
    /**
     * The identifier for the route this Pending Transaction came through. Routes are things like cards and ACH details.
     */
    routeId: string;
    /**
     * The type of the route this Pending Transaction came through.
     */
    routeType: string;
    /**
     * This is an object giving more details on the network-level event that caused the Pending Transaction. For example, for a card transaction this lists the merchant's industry and location.
     */
    source: InboundCardAuthorizationSimulationResultPendingTransactionPendingTransactionSource;
    /**
     * Whether the Pending Transaction has been confirmed and has an associated Transaction.
     */
    status: InboundCardAuthorizationSimulationResultPendingTransactionStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `pending_transaction`.
     */
    type: InboundCardAuthorizationSimulationResultPendingTransactionTypeEnum;
}
/**
 * A constant representing the object's type. For this resource it will always be `inbound_card_authorization_simulation_result`.
 */
export declare enum InboundCardAuthorizationSimulationResultTypeEnum {
    InboundCardAuthorizationSimulationResult = "inbound_card_authorization_simulation_result"
}
/**
 * The results of a Card Authorization simulation.
 */
export declare class InboundCardAuthorizationSimulationResult extends SpeakeasyBase {
    /**
     * If the authorization attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: card_decline`.
     */
    declinedTransaction: InboundCardAuthorizationSimulationResultDeclinedTransaction;
    /**
     * If the authorization attempt succeeds, this will contain the resulting Pending Transaction object. The Pending Transaction's `source` will be of `category: card_authorization`.
     */
    pendingTransaction: InboundCardAuthorizationSimulationResultPendingTransaction;
    /**
     * A constant representing the object's type. For this resource it will always be `inbound_card_authorization_simulation_result`.
     */
    type: InboundCardAuthorizationSimulationResultTypeEnum;
}
