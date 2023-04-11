import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
import { Price } from "./price";
import { TestOrderLineItemProduct } from "./testorderlineitemproduct";
export declare class TestOrderLineItem extends SpeakeasyBase {
    product?: TestOrderLineItemProduct;
    /**
     * Required. Number of items ordered.
     */
    quantityOrdered?: number;
    returnInfo?: OrderLineItemReturnInfo;
    shippingDetails?: OrderLineItemShippingDetails;
    unitTax?: Price;
}
