package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Challenge {
    @JsonProperty("description")
    public String description;
    public Challenge withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Challenge withValue(String value) {
        this.value = value;
        return this;
    }
}