import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { Status } from "./status";
/**
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
 */
export declare class GoogleCloudVisionV1p2beta1AnnotateFileResponse extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The desired input location and metadata.
     */
    inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number;
}
