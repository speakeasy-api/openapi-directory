import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending Transaction's currency. This will match the currency on the Pending Transcation's Account.
 */
export declare enum PendingTransactionCurrencyEnum {
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
export declare enum PendingTransactionPendingTransactionSourceAccountTransferInstructionCurrencyEnum {
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
export declare class PendingTransactionPendingTransactionSourceAccountTransferInstruction extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: PendingTransactionPendingTransactionSourceAccountTransferInstructionCurrencyEnum;
    /**
     * The identifier of the Account Transfer that led to this Pending Transaction.
     */
    transferId: string;
}
/**
 * A ACH Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_instruction`.
 */
export declare class PendingTransactionPendingTransactionSourceACHTransferInstruction extends SpeakeasyBase {
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
export declare enum PendingTransactionPendingTransactionSourceCardAuthorizationCurrencyEnum {
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
export declare enum PendingTransactionPendingTransactionSourceCardAuthorizationNetworkEnum {
    Visa = "visa"
}
/**
 * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
 */
export declare enum PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaElectronicCommerceIndicatorEnum {
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
export declare enum PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaPointOfServiceEntryModeEnum {
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
export declare class PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisa extends SpeakeasyBase {
    /**
     * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
     */
    electronicCommerceIndicator: PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaElectronicCommerceIndicatorEnum;
    /**
     * The method used to enter the cardholder's primary account number and card expiration date
     */
    pointOfServiceEntryMode: PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisaPointOfServiceEntryModeEnum;
}
/**
 * Fields specific to the `network`
 */
export declare class PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetails extends SpeakeasyBase {
    /**
     * Fields specific to the `visa` network
     */
    visa: PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetailsVisa;
}
/**
 * A Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_authorization`.
 */
export declare class PendingTransactionPendingTransactionSourceCardAuthorization extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: PendingTransactionPendingTransactionSourceCardAuthorizationCurrencyEnum;
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
    network: PendingTransactionPendingTransactionSourceCardAuthorizationNetworkEnum;
    /**
     * Fields specific to the `network`
     */
    networkDetails: PendingTransactionPendingTransactionSourceCardAuthorizationNetworkDetails;
    /**
     * The identifier of the Real-Time Decision sent to approve or decline this transaction.
     */
    realTimeDecisionId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum PendingTransactionPendingTransactionSourceDeprecatedCardAuthorizationCurrencyEnum {
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
export declare class PendingTransactionPendingTransactionSourceDeprecatedCardAuthorization extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: PendingTransactionPendingTransactionSourceDeprecatedCardAuthorizationCurrencyEnum;
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
export declare enum PendingTransactionPendingTransactionSourceCategoryEnum {
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
export declare enum PendingTransactionPendingTransactionSourceCheckDepositInstructionCurrencyEnum {
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
export declare class PendingTransactionPendingTransactionSourceCheckDepositInstruction extends SpeakeasyBase {
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
    currency: PendingTransactionPendingTransactionSourceCheckDepositInstructionCurrencyEnum;
    /**
     * The identifier of the File containing the image of the front of the check that was deposited.
     */
    frontImageFileId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
 */
export declare enum PendingTransactionPendingTransactionSourceCheckTransferInstructionCurrencyEnum {
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
export declare class PendingTransactionPendingTransactionSourceCheckTransferInstruction extends SpeakeasyBase {
    /**
     * The pending amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
     */
    currency: PendingTransactionPendingTransactionSourceCheckTransferInstructionCurrencyEnum;
    /**
     * The identifier of the Check Transfer that led to this Pending Transaction.
     */
    transferId: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the hold's currency.
 */
export declare enum PendingTransactionPendingTransactionSourceInboundFundsHoldCurrencyEnum {
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
export declare enum PendingTransactionPendingTransactionSourceInboundFundsHoldStatusEnum {
    Held = "held",
    Complete = "complete"
}
/**
 * A Inbound Funds Hold object. This field will be present in the JSON response if and only if `category` is equal to `inbound_funds_hold`.
 */
export declare class PendingTransactionPendingTransactionSourceInboundFundsHold extends SpeakeasyBase {
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
    currency: PendingTransactionPendingTransactionSourceInboundFundsHoldCurrencyEnum;
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
    status: PendingTransactionPendingTransactionSourceInboundFundsHoldStatusEnum;
}
/**
 * A Wire Drawdown Payment Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_instruction`.
 */
export declare class PendingTransactionPendingTransactionSourceWireDrawdownPaymentInstruction extends SpeakeasyBase {
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
export declare class PendingTransactionPendingTransactionSourceWireTransferInstruction extends SpeakeasyBase {
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
export declare class PendingTransactionPendingTransactionSource extends SpeakeasyBase {
    /**
     * A Account Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `account_transfer_instruction`.
     */
    accountTransferInstruction: PendingTransactionPendingTransactionSourceAccountTransferInstruction;
    /**
     * A ACH Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    achTransferInstruction: PendingTransactionPendingTransactionSourceACHTransferInstruction;
    /**
     * A Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_authorization`.
     */
    cardAuthorization: PendingTransactionPendingTransactionSourceCardAuthorization;
    /**
     * A Deprecated Card Authorization object. This field will be present in the JSON response if and only if `category` is equal to `card_route_authorization`.
     */
    cardRouteAuthorization: PendingTransactionPendingTransactionSourceDeprecatedCardAuthorization;
    /**
     * The type of transaction that took place. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: PendingTransactionPendingTransactionSourceCategoryEnum;
    /**
     * A Check Deposit Instruction object. This field will be present in the JSON response if and only if `category` is equal to `check_deposit_instruction`.
     */
    checkDepositInstruction: PendingTransactionPendingTransactionSourceCheckDepositInstruction;
    /**
     * A Check Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `check_transfer_instruction`.
     */
    checkTransferInstruction: PendingTransactionPendingTransactionSourceCheckTransferInstruction;
    /**
     * A Inbound Funds Hold object. This field will be present in the JSON response if and only if `category` is equal to `inbound_funds_hold`.
     */
    inboundFundsHold: PendingTransactionPendingTransactionSourceInboundFundsHold;
    /**
     * A Wire Drawdown Payment Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_drawdown_payment_instruction`.
     */
    wireDrawdownPaymentInstruction: PendingTransactionPendingTransactionSourceWireDrawdownPaymentInstruction;
    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    wireTransferInstruction: PendingTransactionPendingTransactionSourceWireTransferInstruction;
}
/**
 * Whether the Pending Transaction has been confirmed and has an associated Transaction.
 */
export declare enum PendingTransactionStatusEnum {
    Pending = "pending",
    Complete = "complete"
}
/**
 * A constant representing the object's type. For this resource it will always be `pending_transaction`.
 */
export declare enum PendingTransactionTypeEnum {
    PendingTransaction = "pending_transaction"
}
/**
 * Pending Transactions are potential future additions and removals of money from your bank account.
 */
export declare class PendingTransaction extends SpeakeasyBase {
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
    currency: PendingTransactionCurrencyEnum;
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
    source: PendingTransactionPendingTransactionSource;
    /**
     * Whether the Pending Transaction has been confirmed and has an associated Transaction.
     */
    status: PendingTransactionStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `pending_transaction`.
     */
    type: PendingTransactionTypeEnum;
}
