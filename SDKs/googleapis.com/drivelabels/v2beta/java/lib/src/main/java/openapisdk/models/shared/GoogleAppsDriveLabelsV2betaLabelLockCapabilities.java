package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelLockCapabilities
 * A description of a user's capabilities on a LabelLock.
**/
public class GoogleAppsDriveLabelsV2betaLabelLockCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canViewPolicy")
    public Boolean canViewPolicy;
    public GoogleAppsDriveLabelsV2betaLabelLockCapabilities withCanViewPolicy(Boolean canViewPolicy) {
        this.canViewPolicy = canViewPolicy;
        return this;
    }
}