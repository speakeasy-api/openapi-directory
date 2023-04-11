import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsCustomBatchResponseEntry } from "./accountscustombatchresponseentry";
/**
 * Successful response
 */
export declare class AccountsCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: AccountsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponse`".
     */
    kind?: string;
}
