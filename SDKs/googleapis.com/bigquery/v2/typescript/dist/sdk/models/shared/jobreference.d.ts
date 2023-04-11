import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobReference extends SpeakeasyBase {
    /**
     * [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
     */
    jobId?: string;
    /**
     * The geographic location of the job. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * [Required] The ID of the project containing this job.
     */
    projectId?: string;
}
