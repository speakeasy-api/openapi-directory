package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest
 * An offline file annotation request.
**/
public class GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GoogleCloudVisionV1p2beta1Feature[] features;
    public GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest withFeatures(GoogleCloudVisionV1p2beta1Feature[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageContext")
    public GoogleCloudVisionV1p2beta1ImageContext imageContext;
    public GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest withImageContext(GoogleCloudVisionV1p2beta1ImageContext imageContext) {
        this.imageContext = imageContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudVisionV1p2beta1InputConfig inputConfig;
    public GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest withInputConfig(GoogleCloudVisionV1p2beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public GoogleCloudVisionV1p2beta1OutputConfig outputConfig;
    public GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest withOutputConfig(GoogleCloudVisionV1p2beta1OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}