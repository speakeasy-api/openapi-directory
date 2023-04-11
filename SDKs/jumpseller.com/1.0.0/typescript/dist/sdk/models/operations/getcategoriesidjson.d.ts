import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesIdJsonRequest extends SpeakeasyBase {
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
export declare class GetCategoriesIdJsonResponse extends SpeakeasyBase {
    /**
     * The selected Category.
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
