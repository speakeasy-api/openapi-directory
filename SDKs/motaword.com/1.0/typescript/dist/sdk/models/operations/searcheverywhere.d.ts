import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchEverywhereIncludeEnum {
    Projects = "projects",
    Documents = "documents",
    Strings = "strings"
}
export declare class SearchEverywhereQueryParams extends SpeakeasyBase {
    include?: SearchEverywhereIncludeEnum[];
    page?: number;
    perPage?: number;
    query: string;
}
export declare class SearchEverywhereRequest extends SpeakeasyBase {
    queryParams: SearchEverywhereQueryParams;
}
export declare class SearchEverywhereResponse extends SpeakeasyBase {
    contentType: string;
    searchEverywhereResult?: shared.SearchEverywhereResult;
    statusCode: number;
}
