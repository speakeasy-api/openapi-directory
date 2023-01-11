import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchEditorialSortEnum {
    Relevant = "relevant",
    Newest = "newest",
    Oldest = "oldest"
}
export declare class SearchEditorialQueryParams extends SpeakeasyBase {
    category?: string;
    country: string;
    cursor?: string;
    dateEnd?: Date;
    dateStart?: Date;
    perPage?: number;
    query?: string;
    sort?: SearchEditorialSortEnum;
    supplierCode?: string[];
}
export declare class SearchEditorialSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class SearchEditorialRequest extends SpeakeasyBase {
    queryParams: SearchEditorialQueryParams;
    security: SearchEditorialSecurity;
}
export declare class SearchEditorialResponse extends SpeakeasyBase {
    contentType: string;
    editorialSearchResults?: shared.EditorialSearchResults;
    statusCode: number;
}
