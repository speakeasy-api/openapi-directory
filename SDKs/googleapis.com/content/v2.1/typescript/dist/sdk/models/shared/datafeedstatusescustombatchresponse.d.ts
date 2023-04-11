import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedstatusesCustomBatchResponseEntry } from "./datafeedstatusescustombatchresponseentry";
/**
 * Successful response
 */
export declare class DatafeedstatusesCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: DatafeedstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesCustomBatchResponse`".
     */
    kind?: string;
}
