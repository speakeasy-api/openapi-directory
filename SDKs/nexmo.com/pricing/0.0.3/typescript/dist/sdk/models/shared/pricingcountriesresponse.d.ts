import { SpeakeasyBase } from "../../../internal/utils";
import { CountryObject } from "./countryobject";
/**
 * Pricing response
 */
export declare class PricingCountriesResponse extends SpeakeasyBase {
    /**
     * The number of countries retrieved.
     */
    count?: string;
    /**
     * A list of countries.
     */
    countries?: CountryObject[];
}
