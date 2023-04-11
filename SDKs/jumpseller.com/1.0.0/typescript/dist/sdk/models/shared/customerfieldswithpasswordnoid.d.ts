import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { ShippingAddress } from "./shippingaddress";
/**
 * Status of the Customer
 */
export declare enum CustomerFieldsWithPasswordNoIDStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Disabled = "disabled"
}
export declare class CustomerFieldsWithPasswordNoID extends SpeakeasyBase {
    billingAddress?: BillingAddress;
    customerCategory?: number[];
    /**
     * Email of the Customer
     */
    email?: string;
    /**
     * Password
     */
    password?: string;
    /**
     * Phone of the Customer
     */
    phone?: string;
    shippingAddress?: ShippingAddress;
    /**
     * Status of the Customer
     */
    status?: CustomerFieldsWithPasswordNoIDStatusEnum;
}
