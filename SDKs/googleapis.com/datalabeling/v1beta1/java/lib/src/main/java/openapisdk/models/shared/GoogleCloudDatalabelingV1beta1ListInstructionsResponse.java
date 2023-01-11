package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListInstructionsResponse
 * Results of listing instructions under a project.
**/
public class GoogleCloudDatalabelingV1beta1ListInstructionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructions")
    public GoogleCloudDatalabelingV1beta1Instruction[] instructions;
    public GoogleCloudDatalabelingV1beta1ListInstructionsResponse withInstructions(GoogleCloudDatalabelingV1beta1Instruction[] instructions) {
        this.instructions = instructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListInstructionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}