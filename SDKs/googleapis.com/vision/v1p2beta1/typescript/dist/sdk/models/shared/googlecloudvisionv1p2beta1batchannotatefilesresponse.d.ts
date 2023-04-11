import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateFileResponse } from "./googlecloudvisionv1p2beta1annotatefileresponse";
/**
 * A list of file annotation responses.
 */
export declare class GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse extends SpeakeasyBase {
    /**
     * The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
     */
    responses?: GoogleCloudVisionV1p2beta1AnnotateFileResponse[];
}
