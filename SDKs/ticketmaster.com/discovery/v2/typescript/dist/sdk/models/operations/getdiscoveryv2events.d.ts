import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Yes if you want to display licensed content
 */
export declare enum GetDiscoveryV2EventsIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
/**
 * yes, to include spell check suggestions in the response.
 */
export declare enum GetDiscoveryV2EventsIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
/**
 * True, to include events with date to be announce (TBA)
 */
export declare enum GetDiscoveryV2EventsIncludeTbaEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * True, to include event with a date to be defined (TBD)
 */
export declare enum GetDiscoveryV2EventsIncludeTbdEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
 */
export declare enum GetDiscoveryV2EventsIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * Filter entities by its source name
 */
export declare enum GetDiscoveryV2EventsSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
/**
 * Unit of the radius
 */
export declare enum GetDiscoveryV2EventsUnitEnum {
    Miles = "miles",
    Km = "km"
}
export declare class GetDiscoveryV2EventsRequest extends SpeakeasyBase {
    /**
     * Filter events by attraction id
     */
    attractionId?: string;
    /**
     * Filter events by city
     */
    city?: string;
    /**
     * Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type
     */
    classificationId?: any[];
    /**
     * Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type
     */
    classificationName?: any[];
    /**
     * Filter events by clientName
     */
    clientVisibility?: string;
    /**
     * Filter events by country code
     */
    countryCode?: string;
    /**
     * Filter events by dma id
     */
    dmaId?: string;
    /**
     * Filter events with a start date before this date
     */
    endDateTime?: string;
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
    includeLicensedContent?: GetDiscoveryV2EventsIncludeLicensedContentEnum;
    /**
     * yes, to include spell check suggestions in the response.
     */
    includeSpellcheck?: GetDiscoveryV2EventsIncludeSpellcheckEnum;
    /**
     * True, to include events with date to be announce (TBA)
     */
    includeTBA?: GetDiscoveryV2EventsIncludeTbaEnum;
    /**
     * True, to include event with a date to be defined (TBD)
     */
    includeTBD?: GetDiscoveryV2EventsIncludeTbdEnum;
    /**
     * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
     */
    includeTest?: GetDiscoveryV2EventsIncludeTestEnum;
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
     * Filter events by market id
     */
    marketId?: string;
    /**
     * Filter events with onsale end date before this date
     */
    onsaleEndDateTime?: string;
    /**
     * Filter events with onsale range within this date
     */
    onsaleOnAfterStartDate?: string;
    /**
     * Filter events with onsale start date on this date
     */
    onsaleOnStartDate?: string;
    /**
     * Filter events with onsale start date after this date
     */
    onsaleStartDateTime?: string;
    /**
     * Page number
     */
    page?: string;
    /**
     * Filter events by postal code / zipcode
     */
    postalCode?: string;
    /**
     * Filter events by promoter id
     */
    promoterId?: string;
    /**
     * Radius of the area in which we want to search for events.
     */
    radius?: string;
    /**
     * Filter events by segment id
     */
    segmentId?: string;
    /**
     * Filter events by segment name
     */
    segmentName?: string;
    /**
     * Page size of the response
     */
    size?: string;
    /**
     * Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'
     */
    sort?: string;
    /**
     * Filter entities by its source name
     */
    source?: GetDiscoveryV2EventsSourceEnum;
    /**
     * Filter events with a start date after this date
     */
    startDateTime?: string;
    /**
     * Filter events by state code
     */
    stateCode?: string;
    /**
     * Unit of the radius
     */
    unit?: GetDiscoveryV2EventsUnitEnum;
    /**
     * Filter events by venue id
     */
    venueId?: string;
}
export declare class GetDiscoveryV2EventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
