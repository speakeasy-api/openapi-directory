package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnnotateTextResponse
 * The text annotations response message.
**/
public class AnnotateTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public ClassificationCategory[] categories;
    public AnnotateTextResponse withCategories(ClassificationCategory[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentSentiment")
    public Sentiment documentSentiment;
    public AnnotateTextResponse withDocumentSentiment(Sentiment documentSentiment) {
        this.documentSentiment = documentSentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public Entity[] entities;
    public AnnotateTextResponse withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public AnnotateTextResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentences")
    public Sentence[] sentences;
    public AnnotateTextResponse withSentences(Sentence[] sentences) {
        this.sentences = sentences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokens")
    public Token[] tokens;
    public AnnotateTextResponse withTokens(Token[] tokens) {
        this.tokens = tokens;
        return this;
    }
}