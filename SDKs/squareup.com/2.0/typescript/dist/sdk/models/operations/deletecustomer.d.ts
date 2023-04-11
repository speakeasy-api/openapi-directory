import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteCustomerRequest extends SpeakeasyBase {
    /**
     * The ID of the customer to delete.
     */
    customerId: string;
    /**
     * The current version of the customer profile.
     *
     * @remarks
     *
     * As a best practice, you should include this parameter to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control.  For more information, see [Delete a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
     */
    version?: number;
}
export declare class DeleteCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteCustomerResponse?: shared.DeleteCustomerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
