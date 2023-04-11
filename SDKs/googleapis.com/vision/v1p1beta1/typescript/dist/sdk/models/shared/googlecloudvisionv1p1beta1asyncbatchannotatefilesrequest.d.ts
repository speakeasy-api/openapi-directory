import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest } from "./googlecloudvisionv1p1beta1asyncannotatefilerequest";
/**
 * Multiple async file annotation requests are batched into a single service call.
 */
export declare class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
    /**
     * Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
     */
    parent?: string;
    /**
     * Required. Individual async file annotation requests for this batch.
     */
    requests?: GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest[];
}
