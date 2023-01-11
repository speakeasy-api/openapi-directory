package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Challenge2 {
    @JsonProperty("description")
    public String description;
    public Challenge2 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Challenge2 withValue(String value) {
        this.value = value;
        return this;
    }
}