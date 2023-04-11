import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerGroup } from "./customergroup";
/**
 * Defines the body parameters that can be included in a request to the
 *
 * @remarks
 * [UpdateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/update-customer-group) endpoint.
 */
export declare class UpdateCustomerGroupRequest extends SpeakeasyBase {
    /**
     * Represents a group of customer profiles.
     *
     * @remarks
     *
     * Customer groups can be created, be modified, and have their membership defined using
     * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
     */
    group: CustomerGroup;
}
