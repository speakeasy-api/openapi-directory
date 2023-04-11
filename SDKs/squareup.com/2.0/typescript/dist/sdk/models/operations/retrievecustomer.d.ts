import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCustomerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveCustomerRequest extends SpeakeasyBase {
    /**
     * The ID of the customer to retrieve.
     */
    customerId: string;
}
export declare class RetrieveCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveCustomerResponse?: shared.RetrieveCustomerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
