package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranslateDocumentResponse
 * A translated document response message.
**/
public class TranslateDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentTranslation")
    public DocumentTranslation documentTranslation;
    public TranslateDocumentResponse withDocumentTranslation(DocumentTranslation documentTranslation) {
        this.documentTranslation = documentTranslation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryConfig")
    public TranslateTextGlossaryConfig glossaryConfig;
    public TranslateDocumentResponse withGlossaryConfig(TranslateTextGlossaryConfig glossaryConfig) {
        this.glossaryConfig = glossaryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryDocumentTranslation")
    public DocumentTranslation glossaryDocumentTranslation;
    public TranslateDocumentResponse withGlossaryDocumentTranslation(DocumentTranslation glossaryDocumentTranslation) {
        this.glossaryDocumentTranslation = glossaryDocumentTranslation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public TranslateDocumentResponse withModel(String model) {
        this.model = model;
        return this;
    }
}