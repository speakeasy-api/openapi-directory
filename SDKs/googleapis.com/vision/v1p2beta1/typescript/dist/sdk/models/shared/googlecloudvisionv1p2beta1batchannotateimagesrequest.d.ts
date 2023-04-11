import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateImageRequest } from "./googlecloudvisionv1p2beta1annotateimagerequest";
/**
 * Multiple image annotation requests are batched into a single service call.
 */
export declare class GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest extends SpeakeasyBase {
    /**
     * Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
     */
    parent?: string;
    /**
     * Required. Individual image annotation requests for this batch.
     */
    requests?: GoogleCloudVisionV1p2beta1AnnotateImageRequest[];
}
