package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestCommentScoreResponse
 * The comment score suggestion response message.
**/
public class SuggestCommentScoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public SuggestCommentScoreResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedLanguages")
    public String[] detectedLanguages;
    public SuggestCommentScoreResponse withDetectedLanguages(String[] detectedLanguages) {
        this.detectedLanguages = detectedLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedLanguages")
    public String[] requestedLanguages;
    public SuggestCommentScoreResponse withRequestedLanguages(String[] requestedLanguages) {
        this.requestedLanguages = requestedLanguages;
        return this;
    }
}