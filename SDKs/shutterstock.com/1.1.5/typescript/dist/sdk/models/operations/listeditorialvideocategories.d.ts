import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEditorialVideoCategoriesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListEditorialVideoCategoriesRequest extends SpeakeasyBase {
    security: ListEditorialVideoCategoriesSecurity;
}
export declare class ListEditorialVideoCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    editorialVideoCategoryResults?: shared.EditorialVideoCategoryResults;
    statusCode: number;
}
