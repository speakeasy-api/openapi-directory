import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCategoriesIdJsonRequest extends SpeakeasyBase {
    /**
     * Category parameters.
     */
    categoryEdit: shared.CategoryEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Category
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PutCategoriesIdJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    category?: shared.Category;
    contentType: string;
    /**
     * Category Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
