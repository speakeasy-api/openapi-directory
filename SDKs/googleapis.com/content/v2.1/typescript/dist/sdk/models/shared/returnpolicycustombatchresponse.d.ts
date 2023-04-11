import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnpolicyCustomBatchResponseEntry } from "./returnpolicycustombatchresponseentry";
/**
 * Successful response
 */
export declare class ReturnpolicyCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: ReturnpolicyCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponse`".
     */
    kind?: string;
}
