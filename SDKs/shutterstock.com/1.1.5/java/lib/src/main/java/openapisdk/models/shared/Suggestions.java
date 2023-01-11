package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Suggestions
 * List of search suggestions
**/
public class Suggestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String[] data;
    public Suggestions withData(String[] data) {
        this.data = data;
        return this;
    }
}