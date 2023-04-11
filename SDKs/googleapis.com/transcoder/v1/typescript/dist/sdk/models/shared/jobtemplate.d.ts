import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
/**
 * Transcoding job template resource.
 */
export declare class JobTemplate extends SpeakeasyBase {
    /**
     * Job configuration
     */
    config?: JobConfig;
    /**
     * The labels associated with this job template. You can use these to organize and group your job templates.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the job template. Format: `projects/{project_number}/locations/{location}/jobTemplates/{job_template}`
     */
    name?: string;
}
