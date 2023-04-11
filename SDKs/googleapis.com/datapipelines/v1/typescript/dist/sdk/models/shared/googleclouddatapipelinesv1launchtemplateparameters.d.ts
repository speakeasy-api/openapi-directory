import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1RuntimeEnvironment } from "./googleclouddatapipelinesv1runtimeenvironment";
/**
 * Parameters to provide to the template being launched.
 */
export declare class GoogleCloudDatapipelinesV1LaunchTemplateParameters extends SpeakeasyBase {
    /**
     * The environment values to set at runtime.
     */
    environment?: GoogleCloudDatapipelinesV1RuntimeEnvironment;
    /**
     * Required. The job name to use for the created job.
     */
    jobName?: string;
    /**
     * The runtime parameters to pass to the job.
     */
    parameters?: Record<string, string>;
    /**
     * Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.
     */
    transformNameMapping?: Record<string, string>;
    /**
     * If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
     */
    update?: boolean;
}
