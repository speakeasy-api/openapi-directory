package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LockConfig
 * Determines whether or no a connection is locked. If locked, a reason must be specified.
**/
public class LockConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public LockConfig withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public LockConfig withReason(String reason) {
        this.reason = reason;
        return this;
    }
}