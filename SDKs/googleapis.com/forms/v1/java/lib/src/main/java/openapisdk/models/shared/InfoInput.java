package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoInput
 * The general information for a form.
**/
public class InfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InfoInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public InfoInput withTitle(String title) {
        this.title = title;
        return this;
    }
}