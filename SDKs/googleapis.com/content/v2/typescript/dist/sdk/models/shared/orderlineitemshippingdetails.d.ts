import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemShippingDetailsMethod } from "./orderlineitemshippingdetailsmethod";
export declare class OrderLineItemShippingDetails extends SpeakeasyBase {
    /**
     * Required. The delivery by date, in ISO 8601 format.
     */
    deliverByDate?: string;
    method?: OrderLineItemShippingDetailsMethod;
    /**
     * Required. The ship by date, in ISO 8601 format.
     */
    shipByDate?: string;
    /**
     * Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`"
     */
    type?: string;
}
