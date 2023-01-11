package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeEntitiesRequest
 * The entity analysis request message.
**/
public class AnalyzeEntitiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;
    public AnalyzeEntitiesRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public AnalyzeEntitiesRequestEncodingTypeEnum encodingType;
    public AnalyzeEntitiesRequest withEncodingType(AnalyzeEntitiesRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
}