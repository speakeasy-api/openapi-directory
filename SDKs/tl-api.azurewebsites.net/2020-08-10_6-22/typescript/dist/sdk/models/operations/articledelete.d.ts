import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleDeleteRequest extends SpeakeasyBase {
    /**
     * indentity number(primary key) for article object
     */
    articleId?: number;
}
export declare class ArticleDeleteResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    /**
     * operation was success(true) or fail(false)
     */
    defaultResponseDTOOfInteger?: shared.DefaultResponseDTOOfInteger;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
