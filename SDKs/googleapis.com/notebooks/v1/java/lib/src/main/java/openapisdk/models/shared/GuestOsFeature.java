package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestOsFeature
 * Guest OS features for boot disk.
**/
public class GuestOsFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GuestOsFeature withType(String type) {
        this.type = type;
        return this;
    }
}