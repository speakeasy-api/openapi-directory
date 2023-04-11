import { SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";
/**
 * Request to update a batch of jobs.
 */
export declare class BatchUpdateJobsRequestInput extends SpeakeasyBase {
    /**
     * Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.
     */
    jobs?: JobInput[];
    /**
     * Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation. If update_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. If update_mask is provided, The Job inside JobResult will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.
     */
    updateMask?: string;
}
