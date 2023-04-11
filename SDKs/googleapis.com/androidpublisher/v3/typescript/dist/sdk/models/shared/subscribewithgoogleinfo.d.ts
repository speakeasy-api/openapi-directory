import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information associated with purchases made with 'Subscribe with Google'.
 */
export declare class SubscribeWithGoogleInfo extends SpeakeasyBase {
    /**
     * The email address of the user when the subscription was purchased.
     */
    emailAddress?: string;
    /**
     * The family name of the user when the subscription was purchased.
     */
    familyName?: string;
    /**
     * The given name of the user when the subscription was purchased.
     */
    givenName?: string;
    /**
     * The Google profile id of the user when the subscription was purchased.
     */
    profileId?: string;
    /**
     * The profile name of the user when the subscription was purchased.
     */
    profileName?: string;
}
