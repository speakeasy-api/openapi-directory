package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeSyntaxResponse
 * The syntax analysis response message.
**/
public class AnalyzeSyntaxResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public AnalyzeSyntaxResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentences")
    public Sentence[] sentences;
    public AnalyzeSyntaxResponse withSentences(Sentence[] sentences) {
        this.sentences = sentences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokens")
    public Token[] tokens;
    public AnalyzeSyntaxResponse withTokens(Token[] tokens) {
        this.tokens = tokens;
        return this;
    }
}