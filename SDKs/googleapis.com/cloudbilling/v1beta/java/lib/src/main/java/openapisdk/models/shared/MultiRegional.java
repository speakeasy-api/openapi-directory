package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiRegional
 * Area contains multiple locations.
**/
public class MultiRegional {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MultiRegional withName(String name) {
        this.name = name;
        return this;
    }
}