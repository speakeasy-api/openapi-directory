import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Customer
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCustomersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customer?: shared.Customer;
    /**
     * Customer Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
