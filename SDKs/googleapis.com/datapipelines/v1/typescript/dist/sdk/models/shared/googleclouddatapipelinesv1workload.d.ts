import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest } from "./googleclouddatapipelinesv1launchflextemplaterequest";
import { GoogleCloudDatapipelinesV1LaunchTemplateRequest } from "./googleclouddatapipelinesv1launchtemplaterequest";
/**
 * Workload details for creating the pipeline jobs.
 */
export declare class GoogleCloudDatapipelinesV1Workload extends SpeakeasyBase {
    /**
     * A request to launch a Dataflow job from a Flex Template.
     */
    dataflowFlexTemplateRequest?: GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
    /**
     * A request to launch a template.
     */
    dataflowLaunchTemplateRequest?: GoogleCloudDatapipelinesV1LaunchTemplateRequest;
}
