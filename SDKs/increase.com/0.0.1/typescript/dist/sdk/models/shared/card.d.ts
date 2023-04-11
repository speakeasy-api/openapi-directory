import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Card's billing address.
 */
export declare class CardBillingAddress extends SpeakeasyBase {
    /**
     * The city of the billing address.
     */
    city: string;
    /**
     * The first line of the billing address.
     */
    line1: string;
    /**
     * The second line of the billing address.
     */
    line2: string;
    /**
     * The postal code of the billing address.
     */
    postalCode: string;
    /**
     * The US state of the billing address.
     */
    state: string;
}
/**
 * The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.
 */
export declare class CardDigitalWallet extends SpeakeasyBase {
    /**
     * The card profile assigned to this digital card. Card profiles may also be assigned at the program level.
     */
    cardProfileId: string;
    /**
     * An email address that can be used to verify the cardholder via one-time passcode over email.
     */
    email: string;
    /**
     * A phone number that can be used to verify the cardholder via one-time passcode over SMS.
     */
    phone: string;
}
/**
 * This indicates if payments can be made with the card.
 */
export declare enum CardStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Canceled = "canceled"
}
/**
 * A constant representing the object's type. For this resource it will always be `card`.
 */
export declare enum CardTypeEnum {
    Card = "card"
}
/**
 * Cards are commercial credit cards. They'll immediately work for online purchases after you create them. All cards maintain a credit limit of 100% of the Account’s available balance at the time of transaction. Funds are deducted from the Account upon transaction settlement.
 */
export declare class Card extends SpeakeasyBase {
    /**
     * The identifier for the account this card belongs to.
     */
    accountId: string;
    /**
     * The Card's billing address.
     */
    billingAddress: CardBillingAddress;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card was created.
     */
    createdAt: Date;
    /**
     * The card's description for display purposes.
     */
    description: string;
    /**
     * The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.
     */
    digitalWallet: CardDigitalWallet;
    /**
     * The month the card expires in M format (e.g., August is 8).
     */
    expirationMonth: number;
    /**
     * The year the card expires in YYYY format (e.g., 2025).
     */
    expirationYear: number;
    /**
     * The card identifier.
     */
    id: string;
    /**
     * The last 4 digits of the Card's Primary Account Number.
     */
    last4: string;
    /**
     * This indicates if payments can be made with the card.
     */
    status: CardStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `card`.
     */
    type: CardTypeEnum;
}
