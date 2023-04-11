import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCustomersIdJsonRequest extends SpeakeasyBase {
    /**
     * Customer parameters.
     */
    customerWithPasswordNoID: shared.CustomerWithPasswordNoID;
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
export declare class PutCustomersIdJsonResponse extends SpeakeasyBase {
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
