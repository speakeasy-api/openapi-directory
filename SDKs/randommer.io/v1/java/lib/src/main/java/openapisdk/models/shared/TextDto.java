package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TextDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TextDto withText(String text) {
        this.text = text;
        return this;
    }
}