import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Square seller.
 */
export declare class Merchant extends SpeakeasyBase {
    /**
     * The business name of the merchant.
     */
    businessName?: string;
    /**
     * The country code associated with the merchant account, in ISO 3166 format.
     */
    country: string;
    /**
     * The currency associated with the merchant account, in ISO 4217 format.
     */
    currency?: string;
    /**
     * The Square-issued ID of the merchant.
     */
    id?: string;
    /**
     * The language code associated with the merchant account, in BCP 47 format.
     */
    languageCode?: string;
    /**
     * The ID of the main `Location` for this merchant.
     */
    mainLocationId?: string;
    /**
     * The merchant status, active or inactive.
     */
    status?: string;
}
