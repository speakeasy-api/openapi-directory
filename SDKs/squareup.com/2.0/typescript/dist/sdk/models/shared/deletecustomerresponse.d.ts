import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `DeleteCustomer` endpoint.
 */
export declare class DeleteCustomerResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
