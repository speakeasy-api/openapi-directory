import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsLineItem } from "./orderreturnslineitem";
export declare class OrderreturnsCreateOrderReturnRequest extends SpeakeasyBase {
    /**
     * The list of line items to return.
     */
    lineItems?: OrderreturnsLineItem[];
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;
    /**
     * The way of the package being returned.
     */
    returnMethodType?: string;
}
