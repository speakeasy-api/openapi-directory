import { SpeakeasyBase } from "../../../internal/utils";
import { State } from "./state";
export declare class Country extends SpeakeasyBase {
    /**
     * The calling code prefix used for phone numbers in this country
     */
    callingCode?: string;
    /**
     * The ISO country-code
     */
    countryKey?: string;
    /**
     * The localized name of the country
     */
    label?: string;
    /**
     * List of states/provinces in this country
     */
    states?: State[];
}
