package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchTranslateTextRequest
 * The batch translation request.
**/
public class BatchTranslateTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaries")
    public java.util.Map<String, TranslateTextGlossaryConfig> glossaries;
    public BatchTranslateTextRequest withGlossaries(java.util.Map<String, TranslateTextGlossaryConfig> glossaries) {
        this.glossaries = glossaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfigs")
    public InputConfig[] inputConfigs;
    public BatchTranslateTextRequest withInputConfigs(InputConfig[] inputConfigs) {
        this.inputConfigs = inputConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public BatchTranslateTextRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public java.util.Map<String, String> models;
    public BatchTranslateTextRequest withModels(java.util.Map<String, String> models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public OutputConfig outputConfig;
    public BatchTranslateTextRequest withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLanguageCode")
    public String sourceLanguageCode;
    public BatchTranslateTextRequest withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguageCodes")
    public String[] targetLanguageCodes;
    public BatchTranslateTextRequest withTargetLanguageCodes(String[] targetLanguageCodes) {
        this.targetLanguageCodes = targetLanguageCodes;
        return this;
    }
}