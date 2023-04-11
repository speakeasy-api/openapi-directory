import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchEditorialVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Show only editorial video content with specific resolution
 */
export declare enum SearchEditorialVideosResolutionEnum {
    Fourk = "4k",
    HighDefinition = "high_definition",
    StandardDefinition = "standard_definition"
}
/**
 * Sort by
 */
export declare enum SearchEditorialVideosSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}
export declare class SearchEditorialVideosRequest extends SpeakeasyBase {
    /**
     * Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
     */
    category?: string;
    /**
     * Show only editorial video content that is available for distribution in a certain country
     */
    country: string;
    /**
     * The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     */
    cursor?: string;
    /**
     * Show only editorial video content generated on or before a specific date
     */
    dateEnd?: Date;
    /**
     * Show only editorial video content generated on or after a specific date
     */
    dateStart?: Date;
    /**
     * Show only editorial video content generated with specific frames per second
     */
    fps?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * One or more search terms separated by spaces
     */
    query?: string;
    /**
     * Show only editorial video content with specific resolution
     */
    resolution?: SearchEditorialVideosResolutionEnum;
    /**
     * Sort by
     */
    sort?: SearchEditorialVideosSortEnum;
    /**
     * Show only editorial video content from certain suppliers
     */
    supplierCode?: string[];
}
export declare class SearchEditorialVideosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialVideoSearchResults?: shared.EditorialVideoSearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
