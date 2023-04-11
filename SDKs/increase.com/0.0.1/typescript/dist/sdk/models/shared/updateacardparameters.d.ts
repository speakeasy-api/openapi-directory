import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The card's updated billing address.
 */
export declare class UpdateACardParametersBillingAddress extends SpeakeasyBase {
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
export declare class UpdateACardParametersDigitalWallet extends SpeakeasyBase {
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
/**
 * The status to update the Card with.
 */
export declare enum UpdateACardParametersStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Canceled = "canceled"
}
export declare class UpdateACardParameters extends SpeakeasyBase {
    /**
     * The card's updated billing address.
     */
    billingAddress?: UpdateACardParametersBillingAddress;
    /**
     * The description you choose to give the card.
     */
    description?: string;
    /**
     * The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.
     */
    digitalWallet?: UpdateACardParametersDigitalWallet;
    /**
     * The status to update the Card with.
     */
    status?: UpdateACardParametersStatusEnum;
}
