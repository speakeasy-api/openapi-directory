import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateCustomerRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateCustomerRequest: shared.UpdateCustomerRequest;
    /**
     * The ID of the customer to update.
     */
    customerId: string;
}
export declare class UpdateCustomerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCustomerResponse?: shared.UpdateCustomerResponse;
}
