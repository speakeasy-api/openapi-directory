import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of user countries. A country set determines what variation of app content gets served to a specific location.
 */
export declare class UserCountrySet extends SpeakeasyBase {
    /**
     * List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia.
     */
    countryCodes?: string[];
    /**
     * Country set name.
     */
    name?: string;
}
