import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchEverywhereIncludeEnum {
    Projects = "projects",
    Documents = "documents",
    Strings = "strings"
}
export declare class SearchEverywhereRequest extends SpeakeasyBase {
    /**
     * Search in these entities. Current oprions are projects, documents, strings. Can be multiple. When not provided, we'll search through all entities.
     */
    include?: SearchEverywhereIncludeEnum[];
    page?: number;
    perPage?: number;
    /**
     * Search query term
     */
    query: string;
}
export declare class SearchEverywhereResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Search result for multiple entities and paging
     */
    searchEverywhereResult?: shared.SearchEverywhereResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
