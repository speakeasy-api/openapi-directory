import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerGroup } from "./customergroup";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [RetrieveCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/retrieve-customer-group) endpoint.
 *
 * Either `errors` or `group` is present in a given response (never both).
 */
export declare class RetrieveCustomerGroupResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a group of customer profiles.
     *
     * @remarks
     *
     * Customer groups can be created, be modified, and have their membership defined using
     * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
     */
    group?: CustomerGroup;
}
