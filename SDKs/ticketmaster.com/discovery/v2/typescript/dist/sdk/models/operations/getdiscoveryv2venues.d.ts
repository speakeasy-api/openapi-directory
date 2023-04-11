import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Yes if you want to display licensed content
 */
export declare enum GetDiscoveryV2VenuesIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
/**
 * yes, to include spell check suggestions in the response.
 */
export declare enum GetDiscoveryV2VenuesIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
/**
 * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
 */
export declare enum GetDiscoveryV2VenuesIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * Filter entities by its source name
 */
export declare enum GetDiscoveryV2VenuesSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
/**
 * Unit of the radius
 */
export declare enum GetDiscoveryV2VenuesUnitEnum {
    Miles = "miles",
    Km = "km"
}
export declare class GetDiscoveryV2VenuesRequest extends SpeakeasyBase {
    /**
     * Filter venues by country code
     */
    countryCode?: string;
    /**
     * filter events by geoHash
     */
    geoPoint?: string;
    /**
     * Filter entities by its id
     */
    id?: string;
    /**
     * Yes if you want to display licensed content
     */
    includeLicensedContent?: GetDiscoveryV2VenuesIncludeLicensedContentEnum;
    /**
     * yes, to include spell check suggestions in the response.
     */
    includeSpellcheck?: GetDiscoveryV2VenuesIncludeSpellcheckEnum;
    /**
     * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
     */
    includeTest?: GetDiscoveryV2VenuesIncludeTestEnum;
    /**
     * Keyword to search on
     */
    keyword?: string;
    /**
     * Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead
     */
    latlong?: string;
    /**
     * The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*')
     */
    locale?: string;
    /**
     * Page number
     */
    page?: string;
    /**
     * Radius of the area in which we want to search for events.
     */
    radius?: string;
    /**
     * Page size of the response
     */
    size?: string;
    /**
     * Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'
     */
    sort?: string;
    /**
     * Filter entities by its source name
     */
    source?: GetDiscoveryV2VenuesSourceEnum;
    /**
     * Filter venues by state / province code
     */
    stateCode?: string;
    /**
     * Unit of the radius
     */
    unit?: GetDiscoveryV2VenuesUnitEnum;
}
export declare class GetDiscoveryV2VenuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
