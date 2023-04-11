import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetAddonsRequest extends SpeakeasyBase {
    /**
     * Comma separated gymIds deafult "-1" for all gyms
     */
    gymIds?: string;
    limit?: number;
    offset?: number;
    /**
     * Search text - will be search by the name
     */
    searchText?: string;
    type?: string;
}
export declare class ArticleGetAddonsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDTOOfListOfArticleSearchDTO?: shared.DefaultResponseDTOOfListOfArticleSearchDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
