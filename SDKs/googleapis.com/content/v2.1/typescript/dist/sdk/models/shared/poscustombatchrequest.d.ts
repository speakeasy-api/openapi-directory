import { SpeakeasyBase } from "../../../internal/utils";
import { PosCustomBatchRequestEntry } from "./poscustombatchrequestentry";
export declare class PosCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: PosCustomBatchRequestEntry[];
}
