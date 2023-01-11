package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse
 * Response to a batch image annotation request.
**/
public class GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public GoogleCloudVisionV1p1beta1AnnotateImageResponse[] responses;
    public GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse withResponses(GoogleCloudVisionV1p1beta1AnnotateImageResponse[] responses) {
        this.responses = responses;
        return this;
    }
}