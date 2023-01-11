package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1betaAvailableLocale
 * Represents locales that are available for a web property.
**/
public class GoogleSearchIdeahubV1betaAvailableLocale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public GoogleSearchIdeahubV1betaAvailableLocale withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1betaAvailableLocale withName(String name) {
        this.name = name;
        return this;
    }
}