import { SpeakeasyBase } from "../../../internal/utils";
import { LocalinventoryCustomBatchResponseEntry } from "./localinventorycustombatchresponseentry";
/**
 * Successful response
 */
export declare class LocalinventoryCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: LocalinventoryCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponse`".
     */
    kind?: string;
}
