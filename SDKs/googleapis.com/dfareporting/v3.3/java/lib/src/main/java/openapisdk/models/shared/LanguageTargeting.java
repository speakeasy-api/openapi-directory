package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LanguageTargeting
 * Language Targeting.
**/
public class LanguageTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public Language[] languages;
    public LanguageTargeting withLanguages(Language[] languages) {
        this.languages = languages;
        return this;
    }
}