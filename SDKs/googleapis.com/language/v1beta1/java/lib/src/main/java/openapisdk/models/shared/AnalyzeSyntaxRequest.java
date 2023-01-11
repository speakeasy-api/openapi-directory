package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeSyntaxRequest
 * The syntax analysis request message.
**/
public class AnalyzeSyntaxRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;
    public AnalyzeSyntaxRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public AnalyzeSyntaxRequestEncodingTypeEnum encodingType;
    public AnalyzeSyntaxRequest withEncodingType(AnalyzeSyntaxRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
}