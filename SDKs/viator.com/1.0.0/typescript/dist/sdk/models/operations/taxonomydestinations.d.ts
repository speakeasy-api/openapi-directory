import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxonomyDestinationsRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
}
export declare class TaxonomyDestinations200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **currency code** for the currency in which pricing is displayed
     */
    defaultCurrencyCode?: string;
    /**
     * **unique numeric identifier** of the destination
     *
     * @remarks
     * - use this value as the `destId` input field for other Viator API services
     *
     */
    destinationId?: number;
    /**
     * **natural-language name** of the destination
     */
    destinationName?: string;
    /**
     * **destination type specifier**
     *
     * @remarks
     * - `"COUNTRY"`: destination is a country
     * - `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.
     * - `"CITY"`: destination is a city
     *
     */
    destinationType?: shared.DestinationTypeEnum;
    /**
     * ignore - (Viator only)
     */
    destinationUrlName?: string;
    /**
     * **IATA airport code** for the destination
     *
     * @remarks
     * - a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world
     * - the IATA code is also known as an 'IATA location identifier', 'IATA station code' or simply a 'location identifier'
     * - the IATA code is &lt;u&gt;not available&lt;/u&gt; for destinations with a destination type of `'COUNTRY'` or `'REGION'`, as there could be more than one airport within a destination
     *
     */
    iataCode?: string;
    /**
     * **latitude component** of the destination's geolocation
     */
    latitude?: number;
    /**
     * **longitude component** of the destination's geolocation
     */
    longitude?: number;
    /**
     * **hierarchy location specifier** for the destination that is a concatenation of all `parentId` and `destinationId` codes
     *
     * @remarks
     * - e.g. `'8.77.673'` for Chicago
     * - format: [top level `parentId`].[any additional `parentId`].[`destinationId`]
     *
     */
    lookupId?: string;
    /**
     * **unique numeric identifier** of the destination's parent destination
     */
    parentId?: number;
    /**
     * ignore - (Viator only)
     */
    selectable?: boolean;
    /**
     * **sort order** for this response
     */
    sortOrder?: number;
    /**
     * **time zone** of the destination
     */
    timeZone?: string;
}
/**
 * Success
 */
export declare class TaxonomyDestinations200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of destination objects
     */
    data?: TaxonomyDestinations200ApplicationJSONData[];
    /**
     * **timestamp** of *this* response
     */
    dateStamp?: string;
    /**
     * **array** of error codes pertaining to *this* error
     *
     * @remarks
     * - See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes
     *
     */
    errorCodes?: string[];
    /**
     * **array** of error message strings
     */
    errorMessage?: any[];
    /**
     * **array** of error message strings in plain text
     */
    errorMessageText?: string;
    /**
     * **name** of *this* type of error
     */
    errorName?: string;
    /**
     * **reference number** of *this* error
     */
    errorReference?: string;
    /**
     * **code** specifying the type of error
     */
    errorType?: string;
    /**
     * ignore (Viator only)
     */
    extraInfo?: Record<string, any>;
    /**
     * ignore (Viator only)
     */
    extraObject?: Record<string, any>;
    /**
     * **boolean indicator** of *this* request's outcome
     *
     * @remarks
     * - `true`: the request was successful with no errors
     * - `false`: an error was encountered
     *
     */
    success?: boolean;
    /**
     * **number** of results available for *this* service
     *
     * @remarks
     *
     */
    totalCount?: number;
    /**
     * **unique numeric id** of the server that processed *this* request
     */
    vmid?: string;
}
export declare class TaxonomyDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taxonomyDestinations200ApplicationJSONObject?: TaxonomyDestinations200ApplicationJSON;
}
