import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The card's billing address.
 */
export declare class CreateACardParametersBillingAddress extends SpeakeasyBase {
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
    line2?: string;
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
export declare class CreateACardParametersDigitalWallet extends SpeakeasyBase {
    /**
     * The card profile assigned to this digital card. Card profiles may also be assigned at the program level.
     */
    cardProfileId?: string;
    /**
     * An email address that can be used to verify the cardholder via one-time passcode over email.
     */
    email?: string;
    /**
     * A phone number that can be used to verify the cardholder via one-time passcode over SMS.
     */
    phone?: string;
}
export declare class CreateACardParameters extends SpeakeasyBase {
    /**
     * The Account the card should belong to.
     */
    accountId: string;
    /**
     * The card's billing address.
     */
    billingAddress?: CreateACardParametersBillingAddress;
    /**
     * The description you choose to give the card.
     */
    description?: string;
    /**
     * The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.
     */
    digitalWallet?: CreateACardParametersDigitalWallet;
}
