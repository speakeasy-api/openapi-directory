package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BranchProtectionRequiredLinearHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BranchProtectionRequiredLinearHistory withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}