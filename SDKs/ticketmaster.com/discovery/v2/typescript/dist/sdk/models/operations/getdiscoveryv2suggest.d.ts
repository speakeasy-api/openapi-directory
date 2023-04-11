import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * yes, to include fuzzy matches in the search. This has performance impact.
 */
export declare enum GetDiscoveryV2SuggestIncludeFuzzyEnum {
    Yes = "yes",
    No = " no"
}
/**
 * Yes if you want to display licensed content
 */
export declare enum GetDiscoveryV2SuggestIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
/**
 * yes, to include spell check suggestions in the response.
 */
export declare enum GetDiscoveryV2SuggestIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
/**
 * True, to include events with date to be announce (TBA)
 */
export declare enum GetDiscoveryV2SuggestIncludeTbaEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * True, to include event with a date to be defined (TBD)
 */
export declare enum GetDiscoveryV2SuggestIncludeTbdEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * Filter entities by its source name
 */
export declare enum GetDiscoveryV2SuggestSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
/**
 * Unit of the radius
 */
export declare enum GetDiscoveryV2SuggestUnitEnum {
    Miles = "miles",
    Km = "km"
}
export declare class GetDiscoveryV2SuggestRequest extends SpeakeasyBase {
    /**
     * Filter events to clientName
     */
    clientVisibility?: string;
    /**
     * Filter suggestions by country code
     */
    countryCode?: string;
    /**
     * filter events by geoHash
     */
    geoPoint?: string;
    /**
     * yes, to include fuzzy matches in the search. This has performance impact.
     */
    includeFuzzy?: GetDiscoveryV2SuggestIncludeFuzzyEnum;
    /**
     * Yes if you want to display licensed content
     */
    includeLicensedContent?: GetDiscoveryV2SuggestIncludeLicensedContentEnum;
    /**
     * yes, to include spell check suggestions in the response.
     */
    includeSpellcheck?: GetDiscoveryV2SuggestIncludeSpellcheckEnum;
    /**
     * True, to include events with date to be announce (TBA)
     */
    includeTBA?: GetDiscoveryV2SuggestIncludeTbaEnum;
    /**
     * True, to include event with a date to be defined (TBD)
     */
    includeTBD?: GetDiscoveryV2SuggestIncludeTbdEnum;
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
     * Radius of the area in which we want to search for events.
     */
    radius?: string;
    /**
     * Filter suggestions by segment id
     */
    segmentId?: string;
    /**
     * Size of every entity returned in the response
     */
    size?: string;
    /**
     * Filter entities by its source name
     */
    source?: GetDiscoveryV2SuggestSourceEnum;
    /**
     * Unit of the radius
     */
    unit?: GetDiscoveryV2SuggestUnitEnum;
}
export declare class GetDiscoveryV2SuggestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getDiscoveryV2Suggest200ApplicationHalPlusJsonString?: string;
    /**
     * successful operation
     */
    getDiscoveryV2Suggest200ApplicationJSONString?: string;
}
