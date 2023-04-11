import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalinventoryCustomBatchResponseEntry } from "./regionalinventorycustombatchresponseentry";
/**
 * Successful response
 */
export declare class RegionalinventoryCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: RegionalinventoryCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponse`".
     */
    kind?: string;
}
