import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter } from "./googleclouddatapipelinesv1launchflextemplateparameter";
/**
 * A request to launch a Dataflow job from a Flex Template.
 */
export declare class GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest extends SpeakeasyBase {
    /**
     * Launch Flex Template parameter.
     */
    launchParameter?: GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
    /**
     * Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`.
     */
    location?: string;
    /**
     * Required. The ID of the Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * If true, the request is validated but not actually executed. Defaults to false.
     */
    validateOnly?: boolean;
}
