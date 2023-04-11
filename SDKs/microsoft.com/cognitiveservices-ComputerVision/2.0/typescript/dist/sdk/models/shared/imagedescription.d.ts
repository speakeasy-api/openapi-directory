import { SpeakeasyBase } from "../../../internal/utils";
import { ImageDescriptionDetails } from "./imagedescriptiondetails";
import { ImageMetadata } from "./imagemetadata";
/**
 * A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
 */
export declare class ImageDescription extends SpeakeasyBase {
    /**
     * A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
     */
    description?: ImageDescriptionDetails;
    /**
     * Image metadata.
     */
    metadata?: ImageMetadata;
    /**
     * Id of the REST API request.
     */
    requestId?: string;
}
