package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1AnnotateFileRequest
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
public class GoogleCloudVisionV1p2beta1AnnotateFileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GoogleCloudVisionV1p2beta1Feature[] features;
    public GoogleCloudVisionV1p2beta1AnnotateFileRequest withFeatures(GoogleCloudVisionV1p2beta1Feature[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageContext")
    public GoogleCloudVisionV1p2beta1ImageContext imageContext;
    public GoogleCloudVisionV1p2beta1AnnotateFileRequest withImageContext(GoogleCloudVisionV1p2beta1ImageContext imageContext) {
        this.imageContext = imageContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudVisionV1p2beta1InputConfig inputConfig;
    public GoogleCloudVisionV1p2beta1AnnotateFileRequest withInputConfig(GoogleCloudVisionV1p2beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public Integer[] pages;
    public GoogleCloudVisionV1p2beta1AnnotateFileRequest withPages(Integer[] pages) {
        this.pages = pages;
        return this;
    }
}