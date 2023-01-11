package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeCommentRequest
 * The comment analysis request message.
**/
public class AnalyzeCommentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AnalyzeCommentRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public TextEntry comment;
    public AnalyzeCommentRequest withComment(TextEntry comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communityId")
    public String communityId;
    public AnalyzeCommentRequest withCommunityId(String communityId) {
        this.communityId = communityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Context context;
    public AnalyzeCommentRequest withContext(Context context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doNotStore")
    public Boolean doNotStore;
    public AnalyzeCommentRequest withDoNotStore(Boolean doNotStore) {
        this.doNotStore = doNotStore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public AnalyzeCommentRequest withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedAttributes")
    public java.util.Map<String, AttributeParameters> requestedAttributes;
    public AnalyzeCommentRequest withRequestedAttributes(java.util.Map<String, AttributeParameters> requestedAttributes) {
        this.requestedAttributes = requestedAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public AnalyzeCommentRequest withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanAnnotations")
    public Boolean spanAnnotations;
    public AnalyzeCommentRequest withSpanAnnotations(Boolean spanAnnotations) {
        this.spanAnnotations = spanAnnotations;
        return this;
    }
}