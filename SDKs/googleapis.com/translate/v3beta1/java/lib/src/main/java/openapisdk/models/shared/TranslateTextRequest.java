package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranslateTextRequest
 * The request message for synchronous translation.
**/
public class TranslateTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String[] contents;
    public TranslateTextRequest withContents(String[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryConfig")
    public TranslateTextGlossaryConfig glossaryConfig;
    public TranslateTextRequest withGlossaryConfig(TranslateTextGlossaryConfig glossaryConfig) {
        this.glossaryConfig = glossaryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public TranslateTextRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public TranslateTextRequest withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public TranslateTextRequest withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLanguageCode")
    public String sourceLanguageCode;
    public TranslateTextRequest withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLanguageCode")
    public String targetLanguageCode;
    public TranslateTextRequest withTargetLanguageCode(String targetLanguageCode) {
        this.targetLanguageCode = targetLanguageCode;
        return this;
    }
}