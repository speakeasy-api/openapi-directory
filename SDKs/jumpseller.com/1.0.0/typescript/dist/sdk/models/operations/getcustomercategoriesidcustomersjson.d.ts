import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
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
export declare class GetCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customers?: shared.Customer[];
    /**
     * CustomerCategory Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
