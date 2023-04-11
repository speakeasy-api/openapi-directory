import { SpeakeasyBase } from "../../../internal/utils";
import { Customer } from "./customer";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `UpdateCustomer` endpoint.
 *
 * Either `errors` or `customer` is present in a given response (never both).
 */
export declare class UpdateCustomerResponse extends SpeakeasyBase {
    /**
     * Represents a Square customer profile in the Customer Directory of a Square seller.
     */
    customer?: Customer;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
