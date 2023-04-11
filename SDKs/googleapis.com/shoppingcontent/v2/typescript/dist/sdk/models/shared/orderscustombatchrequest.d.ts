import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntry } from "./orderscustombatchrequestentry";
export declare class OrdersCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: OrdersCustomBatchRequestEntry[];
}
