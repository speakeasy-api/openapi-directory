import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1FaceAnnotationLandmark } from "./googlecloudvisionv1p2beta1faceannotationlandmark";
/**
 * Anger likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Blurred likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Headwear likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Joy likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Sorrow likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Surprise likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Under-exposed likelihood.
 */
export declare enum GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * A face annotation object contains the results of face detection.
 */
export declare class GoogleCloudVisionV1p2beta1FaceAnnotation extends SpeakeasyBase {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationAngerLikelihoodEnum;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationBlurredLikelihoodEnum;
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number;
    /**
     * A bounding polygon for the detected image annotation.
     */
    fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationHeadwearLikelihoodEnum;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationJoyLikelihoodEnum;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number;
    /**
     * Detected face landmarks.
     */
    landmarks?: GoogleCloudVisionV1p2beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSorrowLikelihoodEnum;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationSurpriseLikelihoodEnum;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
     */
    tiltAngle?: number;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: GoogleCloudVisionV1p2beta1FaceAnnotationUnderExposedLikelihoodEnum;
}
