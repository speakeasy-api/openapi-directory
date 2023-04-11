import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeocodeAddressRequest extends SpeakeasyBase {
    /**
     * The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.
     */
    address?: string;
    /**
     * The city/town name to locate
     */
    city?: string;
    /**
     * Limit result to this country (the default is no country bias)
     */
    countryCode?: string;
    /**
     * The county/region name to locate
     */
    county?: string;
    /**
     * If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches
     */
    fuzzySearch?: boolean;
    /**
     * The house/building number to locate
     */
    houseNumber?: string;
    /**
     * The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul>
     */
    languageCode?: string;
    /**
     * The postal code to locate
     */
    postalCode?: string;
    /**
     * The state name to locate
     */
    state?: string;
    /**
     * The street/road name to locate
     */
    street?: string;
}
export declare class GeocodeAddressResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    geocodeAddressResponse?: shared.GeocodeAddressResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
