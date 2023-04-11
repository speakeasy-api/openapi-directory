import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchResponseEntry } from "./orderscustombatchresponseentry";
/**
 * Successful response
 */
export declare class OrdersCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: OrdersCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".
     */
    kind?: string;
}
