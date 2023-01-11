package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FleetInput
 * Fleet contains the Fleet-wide metadata and configuration.
**/
public class FleetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FleetInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}