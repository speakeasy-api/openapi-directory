package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectedBranchRequiredLinearHistory {
    @JsonProperty("enabled")
    public Boolean enabled;
    public ProtectedBranchRequiredLinearHistory withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}