import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialCategoriesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialCategoriesRequest extends SpeakeasyBase {
    security: GetEditorialCategoriesSecurity;
}
export declare class GetEditorialCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    editorialCategoryResults?: shared.EditorialCategoryResults;
    statusCode: number;
}
