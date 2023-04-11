import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1LaunchTemplateParameters } from "./googleclouddatapipelinesv1launchtemplateparameters";
/**
 * A request to launch a template.
 */
export declare class GoogleCloudDatapipelinesV1LaunchTemplateRequest extends SpeakeasyBase {
    /**
     * A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.
     */
    gcsPath?: string;
    /**
     * Parameters to provide to the template being launched.
     */
    launchParameters?: GoogleCloudDatapipelinesV1LaunchTemplateParameters;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
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
