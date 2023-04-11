import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllocateInfo extends SpeakeasyBase {
    /**
     * A list of label keys that were unused by the server in processing the request. Thus, for similar requests repeated in a certain future time window, the caller can choose to ignore these labels in the requests to achieve better client-side cache hits and quota aggregation for rate quota. This field is not populated for allocation quota checks.
     */
    unusedArguments?: string[];
}
