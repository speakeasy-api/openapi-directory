import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCategoriesJsonRequest extends SpeakeasyBase {
    /**
     * Category parameters.
     */
    categoryEdit: shared.CategoryEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostCategoriesJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    category?: shared.Category;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
