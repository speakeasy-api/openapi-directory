import { SpeakeasyBase } from "../../../internal/utils";
import { Timezone } from "./timezone";
export declare class Location extends SpeakeasyBase {
    /**
     * The complete address using comma-separated values
     */
    address: string;
    /**
     * The components which make up the address such as road, city, state, etc
     */
    addressComponents: Record<string, string>;
    /**
     * The city of the location
     */
    city: string;
    /**
     * The country of the location
     */
    country: string;
    /**
     * The ISO 2-letter country code of the location
     */
    countryCode: string;
    /**
     * The ISO 3-letter country code of the location
     */
    countryCode3: string;
    /**
     * ISO 4217 currency code associated with the country
     */
    currencyCode: string;
    /**
     * The location latitude
     */
    latitude: number;
    /**
     * Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub
     */
    locationTags: string[];
    /**
     * The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>
     */
    locationType: string;
    /**
     * The location longitude
     */
    longitude: number;
    /**
     * The formatted address using local standards suitable for printing on an envelope
     */
    postalAddress: string;
    /**
     * The postal code for the location
     */
    postalCode: string;
    /**
     * The ISO 3166-2 region code for the location
     */
    regionCode: string;
    /**
     * The state of the location
     */
    state: string;
    /**
     * Map containing timezone details for the location
     */
    timezone: Record<string, Timezone>;
}
