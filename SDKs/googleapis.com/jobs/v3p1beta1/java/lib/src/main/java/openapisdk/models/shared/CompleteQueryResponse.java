package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompleteQueryResponse
 * Output only. Response of auto-complete query.
**/
public class CompleteQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionResults")
    public CompletionResult[] completionResults;
    public CompleteQueryResponse withCompletionResults(CompletionResult[] completionResults) {
        this.completionResults = completionResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ResponseMetadata metadata;
    public CompleteQueryResponse withMetadata(ResponseMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}