import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImageCategoriesQueryParams extends SpeakeasyBase {
    language?: shared.LanguageEnum;
}
export declare class ListImageCategoriesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListImageCategoriesRequest extends SpeakeasyBase {
    queryParams: ListImageCategoriesQueryParams;
    security: ListImageCategoriesSecurity;
}
export declare class ListImageCategoriesResponse extends SpeakeasyBase {
    categoryDataList?: any;
    contentType: string;
    statusCode: number;
}
