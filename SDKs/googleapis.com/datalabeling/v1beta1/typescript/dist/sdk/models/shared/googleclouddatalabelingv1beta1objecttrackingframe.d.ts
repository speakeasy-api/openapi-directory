import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPoly } from "./googleclouddatalabelingv1beta1boundingpoly";
import { GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly } from "./googleclouddatalabelingv1beta1normalizedboundingpoly";
/**
 * Video frame level annotation for object detection and tracking.
 */
export declare class GoogleCloudDatalabelingV1beta1ObjectTrackingFrame extends SpeakeasyBase {
    /**
     * A bounding polygon in the image.
     */
    boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;
    /**
     * Normalized bounding polygon.
     */
    normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
    /**
     * The time offset of this frame relative to the beginning of the video.
     */
    timeOffset?: string;
}
