import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateFileRequest } from "./googlecloudvisionv1p2beta1annotatefilerequest";
/**
 * A list of requests to annotate files using the BatchAnnotateFiles API.
 */
export declare class GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest extends SpeakeasyBase {
    /**
     * Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
     */
    parent?: string;
    /**
     * Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.
     */
    requests?: GoogleCloudVisionV1p2beta1AnnotateFileRequest[];
}
