package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest
 * Multiple image annotation requests are batched into a single service call.
**/
public class GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleCloudVisionV1p1beta1AnnotateImageRequest[] requests;
    public GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest withRequests(GoogleCloudVisionV1p1beta1AnnotateImageRequest[] requests) {
        this.requests = requests;
        return this;
    }
}