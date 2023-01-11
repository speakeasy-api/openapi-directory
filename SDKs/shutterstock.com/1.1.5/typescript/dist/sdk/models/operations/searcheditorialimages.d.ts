import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchEditorialImagesSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}
export declare class SearchEditorialImagesQueryParams extends SpeakeasyBase {
    category?: string;
    country: string;
    cursor?: string;
    dateEnd?: Date;
    dateStart?: Date;
    perPage?: number;
    query?: string;
    sort?: SearchEditorialImagesSortEnum;
    supplierCode?: string[];
}
export declare class SearchEditorialImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class SearchEditorialImagesRequest extends SpeakeasyBase {
    queryParams: SearchEditorialImagesQueryParams;
    security: SearchEditorialImagesSecurity;
}
export declare class SearchEditorialImagesResponse extends SpeakeasyBase {
    contentType: string;
    editorialSearchResults?: shared.EditorialSearchResults;
    statusCode: number;
}
