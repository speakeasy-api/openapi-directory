package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleConditions21 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_location")
    public Location toLocation;
    public LocationRuleConditions21 withToLocation(Location toLocation) {
        this.toLocation = toLocation;
        return this;
    }
}