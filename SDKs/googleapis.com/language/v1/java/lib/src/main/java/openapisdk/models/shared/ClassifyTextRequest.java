package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassifyTextRequest
 * The document classification request message.
**/
public class ClassifyTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationModelOptions")
    public ClassificationModelOptions classificationModelOptions;
    public ClassifyTextRequest withClassificationModelOptions(ClassificationModelOptions classificationModelOptions) {
        this.classificationModelOptions = classificationModelOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;
    public ClassifyTextRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
}