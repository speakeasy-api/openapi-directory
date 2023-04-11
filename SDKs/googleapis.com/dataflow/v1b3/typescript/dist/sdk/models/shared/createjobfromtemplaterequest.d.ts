import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";
/**
 * A request to create a Cloud Dataflow job from a template.
 */
export declare class CreateJobFromTemplateRequest extends SpeakeasyBase {
    /**
     * The environment values to set at runtime.
     */
    environment?: RuntimeEnvironment;
    /**
     * Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    gcsPath?: string;
    /**
     * Required. The job name to use for the created job.
     */
    jobName?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     */
    location?: string;
    /**
     * The runtime parameters to pass to the job.
     */
    parameters?: Record<string, string>;
}
