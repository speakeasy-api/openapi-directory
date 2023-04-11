import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingRect } from "./boundingrect";
import { ImageMetadata } from "./imagemetadata";
/**
 * Result of AreaOfInterest operation.
 */
export declare class AreaOfInterestResult extends SpeakeasyBase {
    /**
     * A bounding box for an area inside an image.
     */
    areaOfInterest?: BoundingRect;
    /**
     * Image metadata.
     */
    metadata?: ImageMetadata;
    /**
     * Id of the REST API request.
     */
    requestId?: string;
}
