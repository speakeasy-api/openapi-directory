import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEditorialImageCategoriesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListEditorialImageCategoriesRequest extends SpeakeasyBase {
    security: ListEditorialImageCategoriesSecurity;
}
export declare class ListEditorialImageCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    editorialImageCategoryResults?: shared.EditorialImageCategoryResults;
    statusCode: number;
}
