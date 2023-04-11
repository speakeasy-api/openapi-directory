import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Yes if you want to display licensed content
 */
export declare enum FindIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
/**
 * yes, to include spell check suggestions in the response.
 */
export declare enum FindIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
/**
 * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
 */
export declare enum FindIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
/**
 * Filter entities by its source name
 */
export declare enum FindSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare class FindRequest extends SpeakeasyBase {
    /**
     * Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type
     */
    classificationId?: any[];
    /**
     * Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type
     */
    classificationName?: any[];
    /**
     * Filter entities by its id
     */
    id?: string;
    /**
     * Yes if you want to display licensed content
     */
    includeLicensedContent?: FindIncludeLicensedContentEnum;
    /**
     * yes, to include spell check suggestions in the response.
     */
    includeSpellcheck?: FindIncludeSpellcheckEnum;
    /**
     * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
     */
    includeTest?: FindIncludeTestEnum;
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
     * Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'
     */
    sort?: string;
    /**
     * Filter entities by its source name
     */
    source?: FindSourceEnum;
}
export declare class FindResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
