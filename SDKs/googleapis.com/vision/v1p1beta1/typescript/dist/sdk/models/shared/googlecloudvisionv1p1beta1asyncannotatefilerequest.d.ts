import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";
/**
 * An offline file annotation request.
 */
export declare class GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
    /**
     * Required. Requested features.
     */
    features?: GoogleCloudVisionV1p1beta1Feature[];
    /**
     * Image context and/or feature-specific parameters.
     */
    imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
    /**
     * The desired input location and metadata.
     */
    inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
    /**
     * The desired output location and metadata.
     */
    outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
}
