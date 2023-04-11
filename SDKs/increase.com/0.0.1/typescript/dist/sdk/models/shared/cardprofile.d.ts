import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Card's text color, specified as an RGB triple.
 */
export declare class CardProfileDigitalWalletsTextColor extends SpeakeasyBase {
    /**
     * The value of the blue channel in the RGB color.
     */
    blue: number;
    /**
     * The value of the green channel in the RGB color.
     */
    green: number;
    /**
     * The value of the red channel in the RGB color.
     */
    red: number;
}
/**
 * How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.
 */
export declare class CardProfileDigitalWallets extends SpeakeasyBase {
    /**
     * The identifier of the File containing the card's icon image.
     */
    appIconFileId: string;
    /**
     * The identifier of the File containing the card's front image.
     */
    backgroundImageFileId: string;
    /**
     * A user-facing description for the card itself.
     */
    cardDescription: string;
    /**
     * An email address the user can contact to receive support for their card.
     */
    contactEmail: string;
    /**
     * A phone number the user can contact to receive support for their card.
     */
    contactPhone: string;
    /**
     * A website the user can visit to view and receive support for their card.
     */
    contactWebsite: string;
    /**
     * A user-facing description for whoever is issuing the card.
     */
    issuerName: string;
    /**
     * The Card's text color, specified as an RGB triple.
     */
    textColor: CardProfileDigitalWalletsTextColor;
}
/**
 * The status of the Card Profile.
 */
export declare enum CardProfileStatusEnum {
    Pending = "pending",
    Rejected = "rejected",
    Active = "active",
    Archived = "archived"
}
/**
 * A constant representing the object's type. For this resource it will always be `card_profile`.
 */
export declare enum CardProfileTypeEnum {
    CardProfile = "card_profile"
}
/**
 * This contains artwork and metadata relating to a Card's appearance in digital wallet apps like Apple Pay and Google Pay. For more information, see our guide on [digital card artwork](https://increase.com/documentation/card-art)
 */
export declare class CardProfile extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was created.
     */
    createdAt: Date;
    /**
     * A description you can use to identify the Card Profile.
     */
    description: string;
    /**
     * How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.
     */
    digitalWallets: CardProfileDigitalWallets;
    /**
     * The Card Profile identifier.
     */
    id: string;
    /**
     * The status of the Card Profile.
     */
    status: CardProfileStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `card_profile`.
     */
    type: CardProfileTypeEnum;
}
