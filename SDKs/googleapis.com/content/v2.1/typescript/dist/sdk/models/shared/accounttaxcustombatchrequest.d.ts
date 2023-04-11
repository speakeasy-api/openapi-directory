import { SpeakeasyBase } from "../../../internal/utils";
import { AccounttaxCustomBatchRequestEntry } from "./accounttaxcustombatchrequestentry";
export declare class AccounttaxCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: AccounttaxCustomBatchRequestEntry[];
}
