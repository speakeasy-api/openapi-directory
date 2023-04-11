import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Input only. Create job request.
 */
export declare class CreateJobRequest extends SpeakeasyBase {
    /**
     * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
     */
    job?: Job;
}
