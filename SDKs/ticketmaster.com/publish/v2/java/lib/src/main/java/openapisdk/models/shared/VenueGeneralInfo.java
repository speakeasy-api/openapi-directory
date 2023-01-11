package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VenueGeneralInfo
 * Venue general information
**/
public class VenueGeneralInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childRules")
    public java.util.Map<String, String> childRules;
    public VenueGeneralInfo withChildRules(java.util.Map<String, String> childRules) {
        this.childRules = childRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalRules")
    public java.util.Map<String, String> generalRules;
    public VenueGeneralInfo withGeneralRules(java.util.Map<String, String> generalRules) {
        this.generalRules = generalRules;
        return this;
    }
}