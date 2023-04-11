import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchSFXSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort by
 */
export declare enum SearchSFXSortEnum {
    Popular = "popular",
    Newest = "newest",
    Relevance = "relevance",
    Random = "random",
    Oldest = "oldest"
}
/**
 * Amount of detail to render in the response
 */
export declare enum SearchSFXViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class SearchSFXRequest extends SpeakeasyBase {
    /**
     * Show sound effects added on the specified date
     */
    addedDate?: Date;
    /**
     * Show sound effects added before the specified date
     */
    addedDateEnd?: Date;
    /**
     * Show sound effects added on or after the specified date
     */
    addedDateStart?: Date;
    /**
     * Show sound effects with the specified duration in seconds
     */
    duration?: number;
    /**
     * Show sound effects with the specified duration or longer in seconds
     */
    durationFrom?: number;
    /**
     * Show sound effects with the specified duration or shorter in seconds
     */
    durationTo?: number;
    /**
     * Set query and result language (uses Accept-Language header if not set)
     */
    language?: shared.LanguageEnum;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * One or more search terms separated by spaces
     */
    query?: string;
    /**
     * Enable or disable safe search
     */
    safe?: boolean;
    /**
     * Sort by
     */
    sort?: SearchSFXSortEnum;
    /**
     * Amount of detail to render in the response
     */
    view?: SearchSFXViewEnum;
}
export declare class SearchSFXResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sfxSearchResults?: shared.SFXSearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
