import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsReturnItem } from "./orderreturnsreturnitem";
export declare class OrderreturnsProcessRequest extends SpeakeasyBase {
    /**
     * Option to charge the customer return shipping cost.
     */
    fullChargeReturnShippingCost?: boolean;
    /**
     * [required] The ID of the operation, unique across all operations for a given order return.
     */
    operationId?: string;
    refundShippingFee?: OrderreturnsRefundOperation;
    /**
     * The list of items to return.
     */
    returnItems?: OrderreturnsReturnItem[];
}
