package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PasswordStatus
 * Read-only password status.
**/
public class PasswordStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public PasswordStatus withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordExpirationTime")
    public String passwordExpirationTime;
    public PasswordStatus withPasswordExpirationTime(String passwordExpirationTime) {
        this.passwordExpirationTime = passwordExpirationTime;
        return this;
    }
}