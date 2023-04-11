import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
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
export declare class GetCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerCategory?: shared.CustomerCategory;
    /**
     * CustomerCategory Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
