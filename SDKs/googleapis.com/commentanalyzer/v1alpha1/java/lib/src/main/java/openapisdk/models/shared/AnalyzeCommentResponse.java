package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeCommentResponse
 * The comment analysis response message.
**/
public class AnalyzeCommentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeScores")
    public java.util.Map<String, AttributeScores> attributeScores;
    public AnalyzeCommentResponse withAttributeScores(java.util.Map<String, AttributeScores> attributeScores) {
        this.attributeScores = attributeScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AnalyzeCommentResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedLanguages")
    public String[] detectedLanguages;
    public AnalyzeCommentResponse withDetectedLanguages(String[] detectedLanguages) {
        this.detectedLanguages = detectedLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public AnalyzeCommentResponse withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
}