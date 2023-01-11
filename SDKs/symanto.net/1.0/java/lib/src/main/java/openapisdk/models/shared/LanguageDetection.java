package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguageDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LanguageDetection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public LanguageDetection withText(String text) {
        this.text = text;
        return this;
    }
}