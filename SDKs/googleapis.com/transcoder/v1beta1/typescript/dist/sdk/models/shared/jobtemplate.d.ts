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
     * The resource name of the job template. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`
     */
    name?: string;
}
