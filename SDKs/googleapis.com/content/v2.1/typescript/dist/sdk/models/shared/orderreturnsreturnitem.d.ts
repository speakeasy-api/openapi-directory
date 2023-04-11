import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsRejectOperation } from "./orderreturnsrejectoperation";
export declare class OrderreturnsReturnItem extends SpeakeasyBase {
    refund?: OrderreturnsRefundOperation;
    reject?: OrderreturnsRejectOperation;
    /**
     * Unit level ID for the return item. Different units of the same product will have different IDs.
     */
    returnItemId?: string;
}
