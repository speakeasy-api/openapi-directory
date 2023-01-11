package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1AnnotateImageResponse
 * Response to an image annotation request.
**/
public class GoogleCloudVisionV1p2beta1AnnotateImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public GoogleCloudVisionV1p2beta1ImageAnnotationContext context;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withContext(GoogleCloudVisionV1p2beta1ImageAnnotationContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cropHintsAnnotation")
    public GoogleCloudVisionV1p2beta1CropHintsAnnotation cropHintsAnnotation;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withCropHintsAnnotation(GoogleCloudVisionV1p2beta1CropHintsAnnotation cropHintsAnnotation) {
        this.cropHintsAnnotation = cropHintsAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceAnnotations")
    public GoogleCloudVisionV1p2beta1FaceAnnotation[] faceAnnotations;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withFaceAnnotations(GoogleCloudVisionV1p2beta1FaceAnnotation[] faceAnnotations) {
        this.faceAnnotations = faceAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullTextAnnotation")
    public GoogleCloudVisionV1p2beta1TextAnnotation fullTextAnnotation;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withFullTextAnnotation(GoogleCloudVisionV1p2beta1TextAnnotation fullTextAnnotation) {
        this.fullTextAnnotation = fullTextAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePropertiesAnnotation")
    public GoogleCloudVisionV1p2beta1ImageProperties imagePropertiesAnnotation;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withImagePropertiesAnnotation(GoogleCloudVisionV1p2beta1ImageProperties imagePropertiesAnnotation) {
        this.imagePropertiesAnnotation = imagePropertiesAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelAnnotations")
    public GoogleCloudVisionV1p2beta1EntityAnnotation[] labelAnnotations;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withLabelAnnotations(GoogleCloudVisionV1p2beta1EntityAnnotation[] labelAnnotations) {
        this.labelAnnotations = labelAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landmarkAnnotations")
    public GoogleCloudVisionV1p2beta1EntityAnnotation[] landmarkAnnotations;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withLandmarkAnnotations(GoogleCloudVisionV1p2beta1EntityAnnotation[] landmarkAnnotations) {
        this.landmarkAnnotations = landmarkAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedObjectAnnotations")
    public GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation[] localizedObjectAnnotations;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withLocalizedObjectAnnotations(GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation[] localizedObjectAnnotations) {
        this.localizedObjectAnnotations = localizedObjectAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoAnnotations")
    public GoogleCloudVisionV1p2beta1EntityAnnotation[] logoAnnotations;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withLogoAnnotations(GoogleCloudVisionV1p2beta1EntityAnnotation[] logoAnnotations) {
        this.logoAnnotations = logoAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productSearchResults")
    public GoogleCloudVisionV1p2beta1ProductSearchResults productSearchResults;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withProductSearchResults(GoogleCloudVisionV1p2beta1ProductSearchResults productSearchResults) {
        this.productSearchResults = productSearchResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safeSearchAnnotation")
    public GoogleCloudVisionV1p2beta1SafeSearchAnnotation safeSearchAnnotation;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withSafeSearchAnnotation(GoogleCloudVisionV1p2beta1SafeSearchAnnotation safeSearchAnnotation) {
        this.safeSearchAnnotation = safeSearchAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textAnnotations")
    public GoogleCloudVisionV1p2beta1EntityAnnotation[] textAnnotations;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withTextAnnotations(GoogleCloudVisionV1p2beta1EntityAnnotation[] textAnnotations) {
        this.textAnnotations = textAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webDetection")
    public GoogleCloudVisionV1p2beta1WebDetection webDetection;
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse withWebDetection(GoogleCloudVisionV1p2beta1WebDetection webDetection) {
        this.webDetection = webDetection;
        return this;
    }
}