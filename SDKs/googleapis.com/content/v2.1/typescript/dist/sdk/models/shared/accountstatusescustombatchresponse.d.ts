import { SpeakeasyBase } from "../../../internal/utils";
import { AccountstatusesCustomBatchResponseEntry } from "./accountstatusescustombatchresponseentry";
/**
 * Successful response
 */
export declare class AccountstatusesCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: AccountstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesCustomBatchResponse`".
     */
    kind?: string;
}
