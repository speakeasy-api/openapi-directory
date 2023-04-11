import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Input only. Update job request.
 */
export declare class UpdateJobRequest extends SpeakeasyBase {
    /**
     * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
     */
    job?: Job;
    /**
     * Optional but strongly recommended to be provided for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.
     */
    updateMask?: string;
}
