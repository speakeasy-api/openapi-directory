package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SupportedLanguages
 * The response message for discovering supported languages.
**/
public class SupportedLanguages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public SupportedLanguage[] languages;
    public SupportedLanguages withLanguages(SupportedLanguage[] languages) {
        this.languages = languages;
        return this;
    }
}