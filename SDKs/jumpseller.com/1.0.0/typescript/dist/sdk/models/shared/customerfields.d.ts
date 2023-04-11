import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { CustomerAdditionalField } from "./customeradditionalfield";
import { CustomerCategory } from "./customercategory";
import { ShippingAddress } from "./shippingaddress";
/**
 * Status of the Customer
 */
export declare enum CustomerFieldsStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Disabled = "disabled"
}
export declare class CustomerFields extends SpeakeasyBase {
    billingAddress?: BillingAddress;
    customerAdditionalFields?: CustomerAdditionalField[];
    customerCategories?: CustomerCategory[];
    /**
     * Email of the Customer
     */
    email?: string;
    /**
     * Unique identifier of the Customer
     */
    id?: number;
    /**
     * Name of the Customer
     */
    name?: string;
    /**
     * Phone of the Customer
     */
    phone?: string;
    shippingAddress?: ShippingAddress;
    /**
     * Status of the Customer
     */
    status?: CustomerFieldsStatusEnum;
    /**
     * Surname of the Customer
     */
    surname?: string;
}
