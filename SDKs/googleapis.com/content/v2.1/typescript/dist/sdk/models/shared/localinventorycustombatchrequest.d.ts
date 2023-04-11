import { SpeakeasyBase } from "../../../internal/utils";
import { LocalinventoryCustomBatchRequestEntry } from "./localinventorycustombatchrequestentry";
export declare class LocalinventoryCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: LocalinventoryCustomBatchRequestEntry[];
}
