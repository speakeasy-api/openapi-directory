package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities
 * The capabilities a user has on this label's applied metadata.
**/
public class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canApply")
    public Boolean canApply;
    public GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities withCanApply(Boolean canApply) {
        this.canApply = canApply;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRead")
    public Boolean canRead;
    public GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities withCanRead(Boolean canRead) {
        this.canRead = canRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRemove")
    public Boolean canRemove;
    public GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities withCanRemove(Boolean canRemove) {
        this.canRemove = canRemove;
        return this;
    }
}