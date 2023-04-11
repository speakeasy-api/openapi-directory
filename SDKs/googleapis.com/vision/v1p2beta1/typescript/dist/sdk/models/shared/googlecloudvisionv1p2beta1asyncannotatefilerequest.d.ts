import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { GoogleCloudVisionV1p2beta1OutputConfig } from "./googlecloudvisionv1p2beta1outputconfig";
/**
 * An offline file annotation request.
 */
export declare class GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
    /**
     * Required. Requested features.
     */
    features?: GoogleCloudVisionV1p2beta1Feature[];
    /**
     * Image context and/or feature-specific parameters.
     */
    imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
    /**
     * The desired input location and metadata.
     */
    inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
    /**
     * The desired output location and metadata.
     */
    outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
}
