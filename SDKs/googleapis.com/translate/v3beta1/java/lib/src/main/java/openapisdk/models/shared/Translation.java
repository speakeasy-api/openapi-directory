package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Translation
 * A single translation response.
**/
public class Translation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedLanguageCode")
    public String detectedLanguageCode;
    public Translation withDetectedLanguageCode(String detectedLanguageCode) {
        this.detectedLanguageCode = detectedLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryConfig")
    public TranslateTextGlossaryConfig glossaryConfig;
    public Translation withGlossaryConfig(TranslateTextGlossaryConfig glossaryConfig) {
        this.glossaryConfig = glossaryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public Translation withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translatedText")
    public String translatedText;
    public Translation withTranslatedText(String translatedText) {
        this.translatedText = translatedText;
        return this;
    }
}