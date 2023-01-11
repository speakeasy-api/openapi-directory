package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealPausingInfo
 * Information related to deal pausing.
**/
public class DealPausingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pauseReason")
    public String pauseReason;
    public DealPausingInfo withPauseReason(String pauseReason) {
        this.pauseReason = pauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pauseRole")
    public DealPausingInfoPauseRoleEnum pauseRole;
    public DealPausingInfo withPauseRole(DealPausingInfoPauseRoleEnum pauseRole) {
        this.pauseRole = pauseRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausingConsented")
    public Boolean pausingConsented;
    public DealPausingInfo withPausingConsented(Boolean pausingConsented) {
        this.pausingConsented = pausingConsented;
        return this;
    }
}