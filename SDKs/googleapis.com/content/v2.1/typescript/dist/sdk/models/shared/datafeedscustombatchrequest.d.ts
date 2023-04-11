import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedsCustomBatchRequestEntry } from "./datafeedscustombatchrequestentry";
export declare class DatafeedsCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: DatafeedsCustomBatchRequestEntry[];
}
