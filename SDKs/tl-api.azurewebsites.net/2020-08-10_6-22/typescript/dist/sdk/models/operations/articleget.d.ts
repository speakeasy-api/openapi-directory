import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetRequest extends SpeakeasyBase {
    /**
     * indentity number (primary key) for article object
     */
    articleID: number;
}
export declare class ArticleGetResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    /**
     * API Response with Article entity
     */
    defaultResponseDTOOfArticleDTO?: shared.DefaultResponseDTOOfArticleDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
