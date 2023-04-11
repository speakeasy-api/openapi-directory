import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersEmailEmailJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Email of the Customer
     */
    email: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCustomersEmailEmailJsonResponse extends SpeakeasyBase {
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
