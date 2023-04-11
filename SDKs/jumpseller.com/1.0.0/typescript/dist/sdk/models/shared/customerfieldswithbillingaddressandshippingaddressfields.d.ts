import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { ShippingAddress } from "./shippingaddress";
export declare class CustomerFieldsWithBillingAddressAndShippingAddressFields extends SpeakeasyBase {
    billingAddress?: BillingAddress;
    /**
     * Unique identifier of the Customer
     */
    id?: number;
    shippingAddress?: ShippingAddress;
}
