import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Card's text color, specified as an RGB triple. The default is white.
 */
export declare class CreateACardProfileParametersDigitalWalletsTextColor extends SpeakeasyBase {
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
export declare class CreateACardProfileParametersDigitalWallets extends SpeakeasyBase {
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
    contactEmail?: string;
    /**
     * A phone number the user can contact to receive support for their card.
     */
    contactPhone?: string;
    /**
     * A website the user can visit to view and receive support for their card.
     */
    contactWebsite?: string;
    /**
     * A user-facing description for whoever is issuing the card.
     */
    issuerName: string;
    /**
     * The Card's text color, specified as an RGB triple. The default is white.
     */
    textColor?: CreateACardProfileParametersDigitalWalletsTextColor;
}
export declare class CreateACardProfileParameters extends SpeakeasyBase {
    /**
     * A description you can use to identify the Card Profile.
     */
    description: string;
    /**
     * How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.
     */
    digitalWallets: CreateACardProfileParametersDigitalWallets;
}
