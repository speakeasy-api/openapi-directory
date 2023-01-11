package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse
 * A list of file annotation responses.
**/
public class GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public GoogleCloudVisionV1p1beta1AnnotateFileResponse[] responses;
    public GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse withResponses(GoogleCloudVisionV1p1beta1AnnotateFileResponse[] responses) {
        this.responses = responses;
        return this;
    }
}