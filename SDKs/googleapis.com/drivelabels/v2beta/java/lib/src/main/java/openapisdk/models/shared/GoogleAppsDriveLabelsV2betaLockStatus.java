package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLockStatus
 * Contains information about whether a label component should be considered locked.
**/
public class GoogleAppsDriveLabelsV2betaLockStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public GoogleAppsDriveLabelsV2betaLockStatus withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
}