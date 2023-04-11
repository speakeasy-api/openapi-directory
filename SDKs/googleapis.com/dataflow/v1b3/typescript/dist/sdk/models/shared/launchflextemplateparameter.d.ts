import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerSpec } from "./containerspec";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";
/**
 * Launch FlexTemplate Parameter.
 */
export declare class LaunchFlexTemplateParameter extends SpeakeasyBase {
    /**
     * Container Spec.
     */
    containerSpec?: ContainerSpec;
    /**
     * Cloud Storage path to a file with json serialized ContainerSpec as content.
     */
    containerSpecGcsPath?: string;
    /**
     * The environment values to be set at runtime for flex template.
     */
    environment?: FlexTemplateRuntimeEnvironment;
    /**
     * Required. The job name to use for the created job. For update job request, job name should be same as the existing running job.
     */
    jobName?: string;
    /**
     * Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
     */
    launchOptions?: Record<string, string>;
    /**
     * The parameters for FlexTemplate. Ex. {"num_workers":"5"}
     */
    parameters?: Record<string, string>;
    /**
     * Use this to pass transform_name_mappings for streaming update jobs. Ex:{"oldTransformName":"newTransformName",...}'
     */
    transformNameMappings?: Record<string, string>;
    /**
     * Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
     */
    update?: boolean;
}
