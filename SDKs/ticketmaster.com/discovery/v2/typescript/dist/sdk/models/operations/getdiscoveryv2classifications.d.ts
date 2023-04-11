import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Yes if you want to display licensed content
 */
export declare enum GetDiscoveryV2ClassificationsIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
/**
 * yes, to include spell check suggestions in the response.
 */
export declare enum GetDiscoveryV2ClassificationsIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
/**
 * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
 */
export declare enum GetDiscoveryV2ClassificationsIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * Filter entities by its source name
 */
export declare enum GetDiscoveryV2ClassificationsSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare class GetDiscoveryV2ClassificationsRequest extends SpeakeasyBase {
    /**
     * Filter entities by its id
     */
    id?: string;
    /**
     * Yes if you want to display licensed content
     */
    includeLicensedContent?: GetDiscoveryV2ClassificationsIncludeLicensedContentEnum;
    /**
     * yes, to include spell check suggestions in the response.
     */
    includeSpellcheck?: GetDiscoveryV2ClassificationsIncludeSpellcheckEnum;
    /**
     * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
     */
    includeTest?: GetDiscoveryV2ClassificationsIncludeTestEnum;
    /**
     * Keyword to search on
     */
    keyword?: string;
    /**
     * The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*')
     */
    locale?: string;
    /**
     * Page number
     */
    page?: string;
    /**
     * Page size of the response
     */
    size?: string;
    /**
     * Sorting order of the search result
     */
    sort?: string;
    /**
     * Filter entities by its source name
     */
    source?: GetDiscoveryV2ClassificationsSourceEnum;
}
export declare class GetDiscoveryV2ClassificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
