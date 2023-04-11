import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment } from "./googleclouddatapipelinesv1flextemplateruntimeenvironment";
/**
 * Launch Flex Template parameter.
 */
export declare class GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter extends SpeakeasyBase {
    /**
     * Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.
     */
    containerSpecGcsPath?: string;
    /**
     * The environment values to be set at runtime for a Flex Template.
     */
    environment?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
    /**
     * Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.
     */
    jobName?: string;
    /**
     * Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
     */
    launchOptions?: Record<string, string>;
    /**
     * The parameters for the Flex Template. Example: `{"num_workers":"5"}`
     */
    parameters?: Record<string, string>;
    /**
     * Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...}`
     */
    transformNameMappings?: Record<string, string>;
    /**
     * Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
     */
    update?: boolean;
}
