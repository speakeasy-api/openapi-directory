package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionRestrictions
 * This class defines an entitlement data on the Publish API
**/
public class RegionRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed")
    public String[] allowed;
    public RegionRestrictions withAllowed(String[] allowed) {
        this.allowed = allowed;
        return this;
    }
}