import { SpeakeasyBase } from "../../../internal/utils";
import { ProductstatusesCustomBatchResponseEntry } from "./productstatusescustombatchresponseentry";
/**
 * Successful response
 */
export declare class ProductstatusesCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: ProductstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponse`".
     */
    kind?: string;
}
