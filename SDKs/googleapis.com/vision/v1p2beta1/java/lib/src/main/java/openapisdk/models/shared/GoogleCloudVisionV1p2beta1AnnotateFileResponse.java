package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1AnnotateFileResponse
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
public class GoogleCloudVisionV1p2beta1AnnotateFileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public GoogleCloudVisionV1p2beta1AnnotateFileResponse withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudVisionV1p2beta1InputConfig inputConfig;
    public GoogleCloudVisionV1p2beta1AnnotateFileResponse withInputConfig(GoogleCloudVisionV1p2beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public GoogleCloudVisionV1p2beta1AnnotateImageResponse[] responses;
    public GoogleCloudVisionV1p2beta1AnnotateFileResponse withResponses(GoogleCloudVisionV1p2beta1AnnotateImageResponse[] responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPages")
    public Integer totalPages;
    public GoogleCloudVisionV1p2beta1AnnotateFileResponse withTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}