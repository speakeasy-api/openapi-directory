import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListVideoCategoriesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class ListVideoCategoriesRequest extends SpeakeasyBase {
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
}
export declare class ListVideoCategoriesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    categoryDataList?: shared.CategoryDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
