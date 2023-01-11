package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeHistoryEntry
 * The entry of VM image upgrade history.
**/
public class UpgradeHistoryEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public UpgradeHistoryEntryActionEnum action;
    public UpgradeHistoryEntry withAction(UpgradeHistoryEntryActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public String containerImage;
    public UpgradeHistoryEntry withContainerImage(String containerImage) {
        this.containerImage = containerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public UpgradeHistoryEntry withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public String framework;
    public UpgradeHistoryEntry withFramework(String framework) {
        this.framework = framework;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshot")
    public String snapshot;
    public UpgradeHistoryEntry withSnapshot(String snapshot) {
        this.snapshot = snapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UpgradeHistoryEntryStateEnum state;
    public UpgradeHistoryEntry withState(UpgradeHistoryEntryStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetImage")
    public String targetImage;
    public UpgradeHistoryEntry withTargetImage(String targetImage) {
        this.targetImage = targetImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetVersion")
    public String targetVersion;
    public UpgradeHistoryEntry withTargetVersion(String targetVersion) {
        this.targetVersion = targetVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public UpgradeHistoryEntry withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmImage")
    public String vmImage;
    public UpgradeHistoryEntry withVmImage(String vmImage) {
        this.vmImage = vmImage;
        return this;
    }
}