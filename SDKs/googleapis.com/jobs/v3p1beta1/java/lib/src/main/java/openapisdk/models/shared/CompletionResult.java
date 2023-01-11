package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompletionResult
 * Output only. Resource that represents completion results.
**/
public class CompletionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public CompletionResult withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestion")
    public String suggestion;
    public CompletionResult withSuggestion(String suggestion) {
        this.suggestion = suggestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CompletionResultTypeEnum type;
    public CompletionResult withType(CompletionResultTypeEnum type) {
        this.type = type;
        return this;
    }
}