import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
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
export declare class DeleteCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomerCategory Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteCustomerCategoriesIdCustomersJSON200ApplicationJSONString?: string;
}
