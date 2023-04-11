import { SpeakeasyBase } from "../../../internal/utils";
import { PosCustomBatchResponseEntry } from "./poscustombatchresponseentry";
/**
 * Successful response
 */
export declare class PosCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: PosCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponse`".
     */
    kind?: string;
}
