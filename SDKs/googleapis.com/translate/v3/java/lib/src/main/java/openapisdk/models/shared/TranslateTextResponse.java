package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryTranslations")
    public Translation[] glossaryTranslations;
    public TranslateTextResponse withGlossaryTranslations(Translation[] glossaryTranslations) {
        this.glossaryTranslations = glossaryTranslations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public Translation[] translations;
    public TranslateTextResponse withTranslations(Translation[] translations) {
        this.translations = translations;
        return this;
    }
}