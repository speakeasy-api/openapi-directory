import { SpeakeasyBase } from "../../../internal/utils";
export declare class Card extends SpeakeasyBase {
    /**
     * The card holder's city
     */
    addressCity?: string;
    /**
     * The card holder's country
     */
    addressCountry?: string;
    /**
     * The card holder's street address
     */
    addressLine1?: string;
    /**
     * The card holder's street address
     */
    addressLine2?: string;
    /**
     * The card holder's city state/province
     */
    addressState?: string;
    /**
     * The card holder's zip/postal code
     */
    addressZip?: string;
    /**
     * The brand of the credit card. Example: Visa
     */
    brand: string;
    /**
     * The id for this credit card
     */
    cardId: string;
    /**
     * The two digit expiration month
     */
    expMonth: number;
    /**
     * The four digit expiration year
     */
    expYear: number;
    /**
     * True if this is the default credit card
     */
    isDefault: boolean;
    /**
     * The last 4 digits of the credit card number
     */
    last4: string;
    /**
     * The card holder's full name
     */
    name: string;
}
