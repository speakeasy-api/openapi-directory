import { SpeakeasyBase } from "../../../internal/utils";
import { AccounttaxCustomBatchResponseEntry } from "./accounttaxcustombatchresponseentry";
/**
 * Successful response
 */
export declare class AccounttaxCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: AccounttaxCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse".
     */
    kind?: string;
}
