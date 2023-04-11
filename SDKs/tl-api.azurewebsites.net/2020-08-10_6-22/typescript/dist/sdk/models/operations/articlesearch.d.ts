import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleSearchRequest extends SpeakeasyBase {
    /**
     * Active Status 1 : Active, 2: Inactive, 3: All, Default : 1
     */
    activeStatus?: number;
    /**
     * -1 for all gyms
     */
    gymId?: number;
    /**
     * number of recode in result and default is 100. use negative numbers to order by desc
     */
    limit?: number;
    /**
     * number of recodes to skip
     */
    offset?: number;
    /**
     * order by column.!-- invalid column will give internal server error
     */
    orderBy?: string;
    /**
     * part of article name
     */
    searchText?: string;
    /**
     * filter article type. default is 'all'
     */
    type?: string;
}
export declare class ArticleSearchResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    /**
     * API Response with set of a Article entities
     */
    defaultResponseDTOOfListOfArticleSearchDTO?: shared.DefaultResponseDTOOfListOfArticleSearchDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
