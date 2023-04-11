import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Structured address to search by.
 */
export declare class GetServicePointsRequestBodyAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    cityLocality?: string;
    countryCode: string;
    postalCode?: string;
    stateProvince?: string;
}
export declare class GetServicePointsRequestBodyProviders extends SpeakeasyBase {
    /**
     * Uniquely identifies a carrier connection
     */
    carrierId?: string;
    serviceCode?: string[];
}
/**
 * A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.
 */
export declare class GetServicePointsRequestBody extends SpeakeasyBase {
    /**
     * Structured address to search by.
     */
    address?: GetServicePointsRequestBodyAddress;
    /**
     * Unstructured text to search for service points by.
     */
    addressQuery?: string;
    /**
     * The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html
     */
    lat?: number;
    /**
     * The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html
     */
    long?: number;
    /**
     * The maximum number of service points to return
     */
    maxResults?: number;
    /**
     * An array of shipping service providers and service codes
     */
    providers: GetServicePointsRequestBodyProviders[];
    /**
     * Search radius in kilometers
     */
    radius?: number;
}
