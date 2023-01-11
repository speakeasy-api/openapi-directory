package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeSentimentResponse
 * The sentiment analysis response message.
**/
public class AnalyzeSentimentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentSentiment")
    public Sentiment documentSentiment;
    public AnalyzeSentimentResponse withDocumentSentiment(Sentiment documentSentiment) {
        this.documentSentiment = documentSentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public AnalyzeSentimentResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentences")
    public Sentence[] sentences;
    public AnalyzeSentimentResponse withSentences(Sentence[] sentences) {
        this.sentences = sentences;
        return this;
    }
}