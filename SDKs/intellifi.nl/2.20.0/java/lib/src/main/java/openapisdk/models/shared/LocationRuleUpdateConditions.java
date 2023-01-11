package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationRuleUpdateConditions
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
**/
public class LocationRuleUpdateConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_location")
    public String fromLocation;
    public LocationRuleUpdateConditions withFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_location")
    public String toLocation;
    public LocationRuleUpdateConditions withToLocation(String toLocation) {
        this.toLocation = toLocation;
        return this;
    }
}