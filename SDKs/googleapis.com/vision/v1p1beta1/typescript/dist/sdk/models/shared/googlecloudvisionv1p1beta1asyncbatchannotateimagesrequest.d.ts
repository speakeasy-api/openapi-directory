import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AnnotateImageRequest } from "./googlecloudvisionv1p1beta1annotateimagerequest";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";
/**
 * Request for async image annotation for a list of images.
 */
export declare class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
    /**
     * The desired output location and metadata.
     */
    outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
    /**
     * Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
     */
    parent?: string;
    /**
     * Required. Individual image annotation requests for this batch.
     */
    requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[];
}
