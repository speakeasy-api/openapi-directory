import { SpeakeasyBase } from "../../../internal/utils";
import { AdultInfo } from "./adultinfo";
import { Category } from "./category";
import { ColorInfo } from "./colorinfo";
import { DetectedBrand } from "./detectedbrand";
import { DetectedObject } from "./detectedobject";
import { FaceDescription } from "./facedescription";
import { ImageDescriptionDetails } from "./imagedescriptiondetails";
import { ImageMetadata } from "./imagemetadata";
import { ImageTag } from "./imagetag";
import { ImageType } from "./imagetype";
/**
 * Result of AnalyzeImage operation.
 */
export declare class ImageAnalysis extends SpeakeasyBase {
    /**
     * An object describing whether the image contains adult-oriented content and/or is racy.
     */
    adult?: AdultInfo;
    /**
     * Array of brands detected in the image.
     */
    brands?: DetectedBrand[];
    /**
     * An array indicating identified categories.
     */
    categories?: Category[];
    /**
     * An object providing additional metadata describing color attributes.
     */
    color?: ColorInfo;
    /**
     * A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
     */
    description?: ImageDescriptionDetails;
    /**
     * An array of possible faces within the image.
     */
    faces?: FaceDescription[];
    /**
     * An object providing possible image types and matching confidence levels.
     */
    imageType?: ImageType;
    /**
     * Image metadata.
     */
    metadata?: ImageMetadata;
    /**
     * Array of objects describing what was detected in the image.
     */
    objects?: DetectedObject[];
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    /**
     * A list of tags with confidence level.
     */
    tags?: ImageTag[];
}
