package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1AnnotateImageRequest
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
public class GoogleCloudVisionV1p1beta1AnnotateImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GoogleCloudVisionV1p1beta1Feature[] features;
    public GoogleCloudVisionV1p1beta1AnnotateImageRequest withFeatures(GoogleCloudVisionV1p1beta1Feature[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public GoogleCloudVisionV1p1beta1Image image;
    public GoogleCloudVisionV1p1beta1AnnotateImageRequest withImage(GoogleCloudVisionV1p1beta1Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageContext")
    public GoogleCloudVisionV1p1beta1ImageContext imageContext;
    public GoogleCloudVisionV1p1beta1AnnotateImageRequest withImageContext(GoogleCloudVisionV1p1beta1ImageContext imageContext) {
        this.imageContext = imageContext;
        return this;
    }
}