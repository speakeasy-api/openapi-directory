package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemFeature
 * Representation of a system feature.
**/
public class SystemFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SystemFeature withName(String name) {
        this.name = name;
        return this;
    }
}