import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
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
export declare class DeleteCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
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
    deleteCustomerCategoriesIdJSON200ApplicationJSONString?: string;
}
