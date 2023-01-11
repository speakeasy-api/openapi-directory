package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Consent {
    @JsonProperty("id")
    public String id;
    public Consent withId(String id) {
        this.id = id;
        return this;
    }
}