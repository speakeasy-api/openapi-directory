package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguagesResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public LanguagesResource withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LanguagesResource withName(String name) {
        this.name = name;
        return this;
    }
}