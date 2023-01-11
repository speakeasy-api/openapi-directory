package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguageTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public LanguageTag withValue(String value) {
        this.value = value;
        return this;
    }
}