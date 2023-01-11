package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocalizedProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public LanguageTag defaultLanguage;
    public LocalizedProperty withDefaultLanguage(LanguageTag defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localized")
    public LocalizedString[] localized;
    public LocalizedProperty withLocalized(LocalizedString[] localized) {
        this.localized = localized;
        return this;
    }
}