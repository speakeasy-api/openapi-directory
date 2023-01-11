package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranslateDocumentRequest
 * A document translation request.
**/
public class TranslateDocumentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customizedAttribution")
    public String customizedAttribution;
    public TranslateDocumentRequest withCustomizedAttribution(String customizedAttribution) {
        this.customizedAttribution = customizedAttribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentInputConfig")
    public DocumentInputConfig documentInputConfig;
    public TranslateDocumentRequest withDocumentInputConfig(DocumentInputConfig documentInputConfig) {
        this.documentInputConfig = documentInputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentOutputConfig")
    public DocumentOutputConfig documentOutputConfig;
    public TranslateDocumentRequest withDocumentOutputConfig(DocumentOutputConfig documentOutputConfig) {
        this.documentOutputConfig = documentOutputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryConfig")
    public TranslateTextGlossaryConfig glossaryConfig;
    public TranslateDocumentRequest withGlossaryConfig(TranslateTextGlossaryConfig glossaryConfig) {
        this.glossaryConfig = glossaryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTranslateNativePdfOnly")
    public Boolean isTranslateNativePdfOnly;
    public TranslateDocumentRequest withIsTranslateNativePdfOnly(Boolean isTranslateNativePdfOnly) {
        this.isTranslateNativePdfOnly = isTranslateNativePdfOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public TranslateDocumentRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public TranslateDocumentRequest withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLanguageCode")
    public String sourceLanguageCode;
    public TranslateDocumentRequest withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguageCode")
    public String targetLanguageCode;
    public TranslateDocumentRequest withTargetLanguageCode(String targetLanguageCode) {
        this.targetLanguageCode = targetLanguageCode;
        return this;
    }
}