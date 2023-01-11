package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnnotateTextRequest
 * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
**/
public class AnnotateTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;
    public AnnotateTextRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public AnnotateTextRequestEncodingTypeEnum encodingType;
    public AnnotateTextRequest withEncodingType(AnnotateTextRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public Features features;
    public AnnotateTextRequest withFeatures(Features features) {
        this.features = features;
        return this;
    }
}