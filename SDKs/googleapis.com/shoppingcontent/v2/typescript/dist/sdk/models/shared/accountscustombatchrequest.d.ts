import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsCustomBatchRequestEntry } from "./accountscustombatchrequestentry";
export declare class AccountsCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: AccountsCustomBatchRequestEntry[];
}
