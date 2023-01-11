package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalizedText
 * Localized text in given language.
**/
public class LocalizedText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public LocalizedText withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public LocalizedText withText(String text) {
        this.text = text;
        return this;
    }
}