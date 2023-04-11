import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomerCategoriesJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * List restriction
     */
    limit?: number;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * List page
     */
    page?: number;
}
export declare class GetCustomerCategoriesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Customer Categories
     */
    customerCategories?: shared.CustomerCategory[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
