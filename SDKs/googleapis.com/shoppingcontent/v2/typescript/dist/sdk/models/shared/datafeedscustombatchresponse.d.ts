import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedsCustomBatchResponseEntry } from "./datafeedscustombatchresponseentry";
/**
 * Successful response
 */
export declare class DatafeedsCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: DatafeedsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".
     */
    kind?: string;
}
