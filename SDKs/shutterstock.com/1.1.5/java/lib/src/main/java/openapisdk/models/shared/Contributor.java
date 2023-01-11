package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Contributor
 * Information about a contributor
**/
public class Contributor {
    @JsonProperty("id")
    public String id;
    public Contributor withId(String id) {
        this.id = id;
        return this;
    }
}