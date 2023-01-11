package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Area
 * Area
**/
public class Area {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public java.util.Map<String, String> names;
    public Area withNames(java.util.Map<String, String> names) {
        this.names = names;
        return this;
    }
}