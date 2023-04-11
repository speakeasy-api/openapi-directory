import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This indicates if payments can be made with the Digital Wallet Token.
 */
export declare enum DigitalWalletTokenStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Suspended = "suspended",
    Deactivated = "deactivated"
}
/**
 * The digital wallet app being used.
 */
export declare enum DigitalWalletTokenTokenRequestorEnum {
    ApplePay = "apple_pay",
    GooglePay = "google_pay"
}
/**
 * A constant representing the object's type. For this resource it will always be `digital_wallet_token`.
 */
export declare enum DigitalWalletTokenTypeEnum {
    DigitalWalletToken = "digital_wallet_token"
}
/**
 * A Digital Wallet Token is created when a user adds a Card to their Apple Pay or Google Pay app. The Digital Wallet Token can be used for purchases just like a Card.
 */
export declare class DigitalWalletToken extends SpeakeasyBase {
    /**
     * The identifier for the Card this Digital Wallet Token belongs to.
     */
    cardId: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card was created.
     */
    createdAt: Date;
    /**
     * The Digital Wallet Token identifier.
     */
    id: string;
    /**
     * This indicates if payments can be made with the Digital Wallet Token.
     */
    status: DigitalWalletTokenStatusEnum;
    /**
     * The digital wallet app being used.
     */
    tokenRequestor: DigitalWalletTokenTokenRequestorEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `digital_wallet_token`.
     */
    type: DigitalWalletTokenTypeEnum;
}
