package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeStatus
 * UpgradeStatus contains information about upgradeAppliance operation.
**/
public class UpgradeStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public UpgradeStatus withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousVersion")
    public String previousVersion;
    public UpgradeStatus withPreviousVersion(String previousVersion) {
        this.previousVersion = previousVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public UpgradeStatus withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UpgradeStatusStateEnum state;
    public UpgradeStatus withState(UpgradeStatusStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public UpgradeStatus withVersion(String version) {
        this.version = version;
        return this;
    }
}