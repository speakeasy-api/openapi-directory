import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Annotation details for image object detection.
 */
export declare class ImageObjectDetectionAnnotation extends SpeakeasyBase {
    /**
     * A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
     */
    boundingBox?: BoundingPoly;
    /**
     * Output only. The confidence that this annotation is positive for the parent example, value in [0, 1], higher means higher positivity confidence.
     */
    score?: number;
}
