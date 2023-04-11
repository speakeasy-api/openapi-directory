import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchEditorialImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort by
 */
export declare enum SearchEditorialImagesSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}
export declare class SearchEditorialImagesRequest extends SpeakeasyBase {
    /**
     * Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
     */
    category?: string;
    /**
     * Show only editorial content that is available for distribution in a certain country
     */
    country: string;
    /**
     * The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     */
    cursor?: string;
    /**
     * Show only editorial content generated on or before a specific date
     */
    dateEnd?: Date;
    /**
     * Show only editorial content generated on or after a specific date
     */
    dateStart?: Date;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * One or more search terms separated by spaces
     */
    query?: string;
    /**
     * Sort by
     */
    sort?: SearchEditorialImagesSortEnum;
    /**
     * Show only editorial content from certain suppliers
     */
    supplierCode?: string[];
}
export declare class SearchEditorialImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialSearchResults?: shared.EditorialSearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
