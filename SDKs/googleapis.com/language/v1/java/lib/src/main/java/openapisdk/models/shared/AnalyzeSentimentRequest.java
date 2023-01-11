package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeSentimentRequest
 * The sentiment analysis request message.
**/
public class AnalyzeSentimentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;
    public AnalyzeSentimentRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public AnalyzeSentimentRequestEncodingTypeEnum encodingType;
    public AnalyzeSentimentRequest withEncodingType(AnalyzeSentimentRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
}