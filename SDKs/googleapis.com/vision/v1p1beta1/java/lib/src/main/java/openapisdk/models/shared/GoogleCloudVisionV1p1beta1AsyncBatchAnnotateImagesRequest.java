package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest
 * Request for async image annotation for a list of images.
**/
public class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public GoogleCloudVisionV1p1beta1OutputConfig outputConfig;
    public GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest withOutputConfig(GoogleCloudVisionV1p1beta1OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleCloudVisionV1p1beta1AnnotateImageRequest[] requests;
    public GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest withRequests(GoogleCloudVisionV1p1beta1AnnotateImageRequest[] requests) {
        this.requests = requests;
        return this;
    }
}