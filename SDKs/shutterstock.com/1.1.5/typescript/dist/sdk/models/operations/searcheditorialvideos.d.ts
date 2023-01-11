import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchEditorialVideosResolutionEnum {
    Fourk = "4k",
    HighDefinition = "high_definition",
    StandardDefinition = "standard_definition"
}
export declare enum SearchEditorialVideosSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}
export declare class SearchEditorialVideosQueryParams extends SpeakeasyBase {
    category?: string;
    country: string;
    cursor?: string;
    dateEnd?: Date;
    dateStart?: Date;
    fps?: number;
    perPage?: number;
    query?: string;
    resolution?: SearchEditorialVideosResolutionEnum;
    sort?: SearchEditorialVideosSortEnum;
    supplierCode?: string[];
}
export declare class SearchEditorialVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class SearchEditorialVideosRequest extends SpeakeasyBase {
    queryParams: SearchEditorialVideosQueryParams;
    security: SearchEditorialVideosSecurity;
}
export declare class SearchEditorialVideosResponse extends SpeakeasyBase {
    contentType: string;
    editorialVideoSearchResults?: shared.EditorialVideoSearchResults;
    statusCode: number;
}
