import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVideoCategoriesQueryParams extends SpeakeasyBase {
    language?: shared.LanguageEnum;
}
export declare class ListVideoCategoriesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListVideoCategoriesRequest extends SpeakeasyBase {
    queryParams: ListVideoCategoriesQueryParams;
    security: ListVideoCategoriesSecurity;
}
export declare class ListVideoCategoriesResponse extends SpeakeasyBase {
    categoryDataList?: any;
    contentType: string;
    statusCode: number;
}
