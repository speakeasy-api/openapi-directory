package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslationsResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedSourceLanguage")
    public String detectedSourceLanguage;
    public TranslationsResource withDetectedSourceLanguage(String detectedSourceLanguage) {
        this.detectedSourceLanguage = detectedSourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public TranslationsResource withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translatedText")
    public String translatedText;
    public TranslationsResource withTranslatedText(String translatedText) {
        this.translatedText = translatedText;
        return this;
    }
}