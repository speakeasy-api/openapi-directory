import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGymArticleDetailsRequest extends SpeakeasyBase {
    /**
     * indentity number(primary key) for article object
     */
    articleId: number;
    /**
     * indentity number(primary key) for gym object
     */
    gymId: number;
}
export declare class ArticleGymArticleDetailsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDTOOfListOfArticleSearchDTO?: shared.DefaultResponseDTOOfListOfArticleSearchDTO;
    /**
     * API Response with Article entity
     */
    gymArticleDetailsDTO?: shared.GymArticleDetailsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
