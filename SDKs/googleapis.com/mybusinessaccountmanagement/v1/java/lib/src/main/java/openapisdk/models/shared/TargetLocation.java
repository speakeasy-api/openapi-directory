package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetLocation
 * Represents a target location for a pending invitation.
**/
public class TargetLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public TargetLocation withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public TargetLocation withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
}