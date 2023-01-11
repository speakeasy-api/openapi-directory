package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Bands
 * A band that can be used to generate music
**/
public class Bands {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Bands withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Bands withName(String name) {
        this.name = name;
        return this;
    }
}