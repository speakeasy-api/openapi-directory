import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [AddGroupToCustomer](https://developer.squareup.com/reference/square_2021-08-18/customers-api/add-group-to-customer) endpoint.
 */
export declare class AddGroupToCustomerResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
