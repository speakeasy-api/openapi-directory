package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleConditions22 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_location_id")
    public String toLocationId;
    public LocationRuleConditions22 withToLocationId(String toLocationId) {
        this.toLocationId = toLocationId;
        return this;
    }
}