package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeEntitySentimentRequest
 * The entity-level sentiment analysis request message.
**/
public class AnalyzeEntitySentimentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;
    public AnalyzeEntitySentimentRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public AnalyzeEntitySentimentRequestEncodingTypeEnum encodingType;
    public AnalyzeEntitySentimentRequest withEncodingType(AnalyzeEntitySentimentRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
}