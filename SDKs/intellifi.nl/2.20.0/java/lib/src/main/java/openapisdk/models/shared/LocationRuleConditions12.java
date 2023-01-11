package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleConditions12 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_location_id")
    public String fromLocationId;
    public LocationRuleConditions12 withFromLocationId(String fromLocationId) {
        this.fromLocationId = fromLocationId;
        return this;
    }
}