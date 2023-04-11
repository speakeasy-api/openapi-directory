import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnaddressCustomBatchResponseEntry } from "./returnaddresscustombatchresponseentry";
/**
 * Successful response
 */
export declare class ReturnaddressCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: ReturnaddressCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponse`".
     */
    kind?: string;
}
