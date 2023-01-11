package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleConditions11 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_location")
    public Location fromLocation;
    public LocationRuleConditions11 withFromLocation(Location fromLocation) {
        this.fromLocation = fromLocation;
        return this;
    }
}