import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether or not the authorization was approved.
 */
export declare enum RealTimeDecisionCardAuthorizationDecisionEnum {
    Approve = "approve",
    Decline = "decline"
}
/**
 * The payment network used to process this card authorization
 */
export declare enum RealTimeDecisionCardAuthorizationNetworkEnum {
    Visa = "visa"
}
/**
 * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
 */
export declare enum RealTimeDecisionCardAuthorizationNetworkDetailsVisaElectronicCommerceIndicatorEnum {
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
export declare enum RealTimeDecisionCardAuthorizationNetworkDetailsVisaPointOfServiceEntryModeEnum {
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
export declare class RealTimeDecisionCardAuthorizationNetworkDetailsVisa extends SpeakeasyBase {
    /**
     * For electronic commerce transactions, this identifies the level of security used in obtaining the customer's payment credential. For mail or telephone order transactions, identifies the type of mail or telephone order.
     */
    electronicCommerceIndicator: RealTimeDecisionCardAuthorizationNetworkDetailsVisaElectronicCommerceIndicatorEnum;
    /**
     * The method used to enter the cardholder's primary account number and card expiration date
     */
    pointOfServiceEntryMode: RealTimeDecisionCardAuthorizationNetworkDetailsVisaPointOfServiceEntryModeEnum;
}
/**
 * Fields specific to the `network`
 */
export declare class RealTimeDecisionCardAuthorizationNetworkDetails extends SpeakeasyBase {
    /**
     * Fields specific to the `visa` network
     */
    visa: RealTimeDecisionCardAuthorizationNetworkDetailsVisa;
}
/**
 * Fields related to a card authorization.
 */
export declare class RealTimeDecisionCardAuthorization extends SpeakeasyBase {
    /**
     * The identifier of the Account the authorization will debit.
     */
    accountId: string;
    /**
     * The identifier of the Card that is being authorized.
     */
    cardId: string;
    /**
     * Whether or not the authorization was approved.
     */
    decision: RealTimeDecisionCardAuthorizationDecisionEnum;
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
    network: RealTimeDecisionCardAuthorizationNetworkEnum;
    /**
     * Fields specific to the `network`
     */
    networkDetails: RealTimeDecisionCardAuthorizationNetworkDetails;
    /**
     * The amount of the attempted authorization in the currency the card user sees at the time of purchase, in the minor unit of that currency. For dollars, for example, this is cents.
     */
    presentmentAmount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the currency the user sees at the time of purchase.
     */
    presentmentCurrency: string;
    /**
     * The amount of the attempted authorization in the currency it will be settled in. This currency is the same as that of the Account the card belongs to.
     */
    settlementAmount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the currency the transaction will be settled in.
     */
    settlementCurrency: string;
}
/**
 * The category of the Real-Time Decision.
 */
export declare enum RealTimeDecisionCategoryEnum {
    CardAuthorizationRequested = "card_authorization_requested",
    DigitalWalletTokenRequested = "digital_wallet_token_requested",
    DigitalWalletAuthenticationRequested = "digital_wallet_authentication_requested"
}
/**
 * The channel to send the card user their one-time passcode.
 */
export declare enum RealTimeDecisionDigitalWalletAuthenticationChannelEnum {
    Sms = "sms",
    Email = "email"
}
/**
 * The digital wallet app being used.
 */
export declare enum RealTimeDecisionDigitalWalletAuthenticationDigitalWalletEnum {
    ApplePay = "apple_pay",
    GooglePay = "google_pay"
}
/**
 * Whether your application successfully delivered the one-time passcode.
 */
export declare enum RealTimeDecisionDigitalWalletAuthenticationResultEnum {
    Success = "success",
    Failure = "failure"
}
/**
 * Fields related to a digital wallet authentication attempt.
 */
export declare class RealTimeDecisionDigitalWalletAuthentication extends SpeakeasyBase {
    /**
     * The identifier of the Card that is being tokenized.
     */
    cardId: string;
    /**
     * The channel to send the card user their one-time passcode.
     */
    channel: RealTimeDecisionDigitalWalletAuthenticationChannelEnum;
    /**
     * The digital wallet app being used.
     */
    digitalWallet: RealTimeDecisionDigitalWalletAuthenticationDigitalWalletEnum;
    /**
     * The email to send the one-time passcode to if `channel` is equal to `email`.
     */
    email: string;
    /**
     * The one-time passcode to send the card user.
     */
    oneTimePasscode: string;
    /**
     * The phone number to send the one-time passcode to if `channel` is equal to `sms`.
     */
    phone: string;
    /**
     * Whether your application successfully delivered the one-time passcode.
     */
    result: RealTimeDecisionDigitalWalletAuthenticationResultEnum;
}
/**
 * Whether or not the provisioning request was approved. This will be null until the real time decision is responded to.
 */
export declare enum RealTimeDecisionDigitalWalletTokenDecisionEnum {
    Approve = "approve",
    Decline = "decline"
}
/**
 * The digital wallet app being used.
 */
export declare enum RealTimeDecisionDigitalWalletTokenDigitalWalletEnum {
    ApplePay = "apple_pay",
    GooglePay = "google_pay"
}
/**
 * Fields related to a digital wallet token provisioning attempt.
 */
export declare class RealTimeDecisionDigitalWalletToken extends SpeakeasyBase {
    /**
     * The identifier of the Card that is being tokenized.
     */
    cardId: string;
    /**
     * The identifier of the Card Profile that was set via the real time decision. This will be null until the real time decision is responded to or if the real time decision did not set a card profile.
     */
    cardProfileId: string;
    /**
     * Whether or not the provisioning request was approved. This will be null until the real time decision is responded to.
     */
    decision: RealTimeDecisionDigitalWalletTokenDecisionEnum;
    /**
     * The digital wallet app being used.
     */
    digitalWallet: RealTimeDecisionDigitalWalletTokenDigitalWalletEnum;
}
/**
 * The status of the Real-Time Decision.
 */
export declare enum RealTimeDecisionStatusEnum {
    Pending = "pending",
    Responded = "responded",
    TimedOut = "timed_out"
}
/**
 * A constant representing the object's type. For this resource it will always be `real_time_decision`.
 */
export declare enum RealTimeDecisionTypeEnum {
    RealTimeDecision = "real_time_decision"
}
/**
 * Real Time Decisions are created when your application needs to take action in real-time to some event such as a card authorization. Real time decisions are currently in beta; please contact support@increase.com if you're interested in trying them out!
 */
export declare class RealTimeDecision extends SpeakeasyBase {
    /**
     * Fields related to a card authorization.
     */
    cardAuthorization: RealTimeDecisionCardAuthorization;
    /**
     * The category of the Real-Time Decision.
     */
    category: RealTimeDecisionCategoryEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Real-Time Decision was created.
     */
    createdAt: Date;
    /**
     * Fields related to a digital wallet authentication attempt.
     */
    digitalWalletAuthentication: RealTimeDecisionDigitalWalletAuthentication;
    /**
     * Fields related to a digital wallet token provisioning attempt.
     */
    digitalWalletToken: RealTimeDecisionDigitalWalletToken;
    /**
     * The Real-Time Decision identifier.
     */
    id: string;
    /**
     * The status of the Real-Time Decision.
     */
    status: RealTimeDecisionStatusEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which your application can no longer respond to the Real-Time Decision.
     */
    timeoutAt: Date;
    /**
     * A constant representing the object's type. For this resource it will always be `real_time_decision`.
     */
    type: RealTimeDecisionTypeEnum;
}
