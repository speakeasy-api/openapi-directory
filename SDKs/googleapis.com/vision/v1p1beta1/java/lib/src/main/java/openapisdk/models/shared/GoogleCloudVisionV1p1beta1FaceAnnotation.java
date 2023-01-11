package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1FaceAnnotation
 * A face annotation object contains the results of face detection.
**/
public class GoogleCloudVisionV1p1beta1FaceAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("angerLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum angerLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withAngerLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum angerLikelihood) {
        this.angerLikelihood = angerLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blurredLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum blurredLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withBlurredLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum blurredLikelihood) {
        this.blurredLikelihood = blurredLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudVisionV1p1beta1BoundingPoly boundingPoly;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withBoundingPoly(GoogleCloudVisionV1p1beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectionConfidence")
    public Float detectionConfidence;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withDetectionConfidence(Float detectionConfidence) {
        this.detectionConfidence = detectionConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fdBoundingPoly")
    public GoogleCloudVisionV1p1beta1BoundingPoly fdBoundingPoly;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withFdBoundingPoly(GoogleCloudVisionV1p1beta1BoundingPoly fdBoundingPoly) {
        this.fdBoundingPoly = fdBoundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headwearLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum headwearLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withHeadwearLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum headwearLikelihood) {
        this.headwearLikelihood = headwearLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("joyLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum joyLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withJoyLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum joyLikelihood) {
        this.joyLikelihood = joyLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landmarkingConfidence")
    public Float landmarkingConfidence;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withLandmarkingConfidence(Float landmarkingConfidence) {
        this.landmarkingConfidence = landmarkingConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landmarks")
    public GoogleCloudVisionV1p1beta1FaceAnnotationLandmark[] landmarks;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withLandmarks(GoogleCloudVisionV1p1beta1FaceAnnotationLandmark[] landmarks) {
        this.landmarks = landmarks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panAngle")
    public Float panAngle;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withPanAngle(Float panAngle) {
        this.panAngle = panAngle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollAngle")
    public Float rollAngle;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withRollAngle(Float rollAngle) {
        this.rollAngle = rollAngle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sorrowLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum sorrowLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withSorrowLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum sorrowLikelihood) {
        this.sorrowLikelihood = sorrowLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surpriseLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum surpriseLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withSurpriseLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum surpriseLikelihood) {
        this.surpriseLikelihood = surpriseLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiltAngle")
    public Float tiltAngle;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withTiltAngle(Float tiltAngle) {
        this.tiltAngle = tiltAngle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underExposedLikelihood")
    public GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum underExposedLikelihood;
    public GoogleCloudVisionV1p1beta1FaceAnnotation withUnderExposedLikelihood(GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum underExposedLikelihood) {
        this.underExposedLikelihood = underExposedLikelihood;
        return this;
    }
}