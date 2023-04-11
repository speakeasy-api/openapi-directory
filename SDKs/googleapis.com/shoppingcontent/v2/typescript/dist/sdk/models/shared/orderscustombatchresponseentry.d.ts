import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Order } from "./order";
export declare class OrdersCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * The status of the execution. Only defined if 1. the request was successful; and 2. the method is not `get`, `getByMerchantOrderId`, or one of the test methods. Acceptable values are: - "`duplicate`" - "`executed`"
     */
    executionStatus?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
     */
    order?: Order;
}
