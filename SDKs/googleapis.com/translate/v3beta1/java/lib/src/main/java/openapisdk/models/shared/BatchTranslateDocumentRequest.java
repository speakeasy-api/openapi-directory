package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchTranslateDocumentRequest
 * The BatchTranslateDocument request.
**/
public class BatchTranslateDocumentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatConversions")
    public java.util.Map<String, String> formatConversions;
    public BatchTranslateDocumentRequest withFormatConversions(java.util.Map<String, String> formatConversions) {
        this.formatConversions = formatConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaries")
    public java.util.Map<String, TranslateTextGlossaryConfig> glossaries;
    public BatchTranslateDocumentRequest withGlossaries(java.util.Map<String, TranslateTextGlossaryConfig> glossaries) {
        this.glossaries = glossaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfigs")
    public BatchDocumentInputConfig[] inputConfigs;
    public BatchTranslateDocumentRequest withInputConfigs(BatchDocumentInputConfig[] inputConfigs) {
        this.inputConfigs = inputConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public java.util.Map<String, String> models;
    public BatchTranslateDocumentRequest withModels(java.util.Map<String, String> models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public BatchDocumentOutputConfig outputConfig;
    public BatchTranslateDocumentRequest withOutputConfig(BatchDocumentOutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLanguageCode")
    public String sourceLanguageCode;
    public BatchTranslateDocumentRequest withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguageCodes")
    public String[] targetLanguageCodes;
    public BatchTranslateDocumentRequest withTargetLanguageCodes(String[] targetLanguageCodes) {
        this.targetLanguageCodes = targetLanguageCodes;
        return this;
    }
}