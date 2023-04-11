import { SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./job";
/**
 * Request to create a batch of jobs.
 */
export declare class BatchCreateJobsRequestInput extends SpeakeasyBase {
    /**
     * Required. The jobs to be created. A maximum of 200 jobs can be created in a batch.
     */
    jobs?: JobInput[];
}
