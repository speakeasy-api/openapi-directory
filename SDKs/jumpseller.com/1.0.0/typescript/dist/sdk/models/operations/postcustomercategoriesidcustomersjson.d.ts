import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
    /**
     * Customer parameters.
     */
    customersToCustomerCategory: shared.CustomersToCustomerCategory;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the CustomerCategory
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Array of Customers in the Customer Category
     */
    customers?: shared.Customer[];
    /**
     * CustomerCategory Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
