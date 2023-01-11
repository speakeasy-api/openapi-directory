package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestCommentScoreRequest
 * The comment score suggestion request message.
**/
public class SuggestCommentScoreRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeScores")
    public java.util.Map<String, AttributeScores> attributeScores;
    public SuggestCommentScoreRequest withAttributeScores(java.util.Map<String, AttributeScores> attributeScores) {
        this.attributeScores = attributeScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public SuggestCommentScoreRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public TextEntry comment;
    public SuggestCommentScoreRequest withComment(TextEntry comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communityId")
    public String communityId;
    public SuggestCommentScoreRequest withCommunityId(String communityId) {
        this.communityId = communityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Context context;
    public SuggestCommentScoreRequest withContext(Context context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public SuggestCommentScoreRequest withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public SuggestCommentScoreRequest withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}