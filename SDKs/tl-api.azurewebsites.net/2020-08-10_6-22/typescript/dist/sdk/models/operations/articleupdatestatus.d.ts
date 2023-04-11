import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleUpdateStatusRequest extends SpeakeasyBase {
    articleId?: number;
    /**
     * 1 : activate , 2 deactivate
     */
    status?: number;
    /**
     * Updating user
     */
    userName?: string;
}
export declare class ArticleUpdateStatusResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDTOOfInteger?: shared.DefaultResponseDTOOfInteger;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
