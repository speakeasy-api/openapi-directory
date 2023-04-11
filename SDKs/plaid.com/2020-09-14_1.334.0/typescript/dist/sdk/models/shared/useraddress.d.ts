import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Home address for the user.
 */
export declare class UserAddress extends SpeakeasyBase {
    /**
     * City from the end user's address
     */
    city: string;
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     */
    country: string;
    /**
     * The postal code for the associated address. Between 2 and 10 alphanumeric characters. For US-based addresses this must be 5 numeric digits.
     */
    postalCode: string;
    /**
     * An ISO 3166-2 subdivision code. Related terms would be "state", "province", "prefecture", "zone", "subdivision", etc.
     */
    region: string;
    /**
     * The primary street portion of an address. If the user has submitted their address, this field will always be filled.
     */
    street: string;
    /**
     * Extra street information, like an apartment or suite number.
     */
    street2?: string;
}
