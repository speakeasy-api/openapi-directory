import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerFieldsWithBillingAddressAndShippingAddressFields } from "./customerfieldswithbillingaddressandshippingaddressfields";
import { OrderProductOrderCreate } from "./orderproductordercreate";
/**
 * Status of the Order
 */
export declare enum OrderCreateFieldsStatusEnum {
    Abandoned = "Abandoned",
    Canceled = "Canceled",
    PendingPayment = "Pending Payment",
    Paid = "Paid"
}
export declare class OrderCreateFields extends SpeakeasyBase {
    customer?: CustomerFieldsWithBillingAddressAndShippingAddressFields;
    products?: OrderProductOrderCreate[];
    /**
     * Shipping method id
     */
    shippingMethodId?: number;
    /**
     * Shipping method name e.g. Royal Mail
     */
    shippingMethodName?: string;
    /**
     * Shipping method's price (applicable if shipping_method_name is provided instead of a shipping_method_id)
     */
    shippingPrice?: number;
    /**
     * Status of the Order
     */
    status?: OrderCreateFieldsStatusEnum;
}
