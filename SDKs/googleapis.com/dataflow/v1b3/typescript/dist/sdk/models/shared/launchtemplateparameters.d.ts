import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";
/**
 * Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.
 */
export declare class LaunchTemplateParameters extends SpeakeasyBase {
    /**
     * The environment values to set at runtime.
     */
    environment?: RuntimeEnvironment;
    /**
     * Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`
     */
    jobName?: string;
    /**
     * The runtime parameters to pass to the job.
     */
    parameters?: Record<string, string>;
    /**
     * Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
     */
    transformNameMapping?: Record<string, string>;
    /**
     * If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
     */
    update?: boolean;
}
