package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocalizedString {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public LocalizedString withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public LocalizedString withValue(String value) {
        this.value = value;
        return this;
    }
}