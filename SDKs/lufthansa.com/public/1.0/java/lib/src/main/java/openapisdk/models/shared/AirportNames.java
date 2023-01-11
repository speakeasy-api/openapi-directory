package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirportNames
 * Container for airport names.
**/
public class AirportNames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public Name[] name;
    public AirportNames withName(Name[] name) {
        this.name = name;
        return this;
    }
}