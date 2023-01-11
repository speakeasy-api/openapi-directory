package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Restore
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
public class Restore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup")
    public String backup;
    public Restore withBackup(String backup) {
        this.backup = backup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public Restore withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeTime")
    public String completeTime;
    public Restore withCompleteTime(String completeTime) {
        this.completeTime = completeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Restore withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Restore withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Restore withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Restore withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Restore withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesExcludedCount")
    public Integer resourcesExcludedCount;
    public Restore withResourcesExcludedCount(Integer resourcesExcludedCount) {
        this.resourcesExcludedCount = resourcesExcludedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesFailedCount")
    public Integer resourcesFailedCount;
    public Restore withResourcesFailedCount(Integer resourcesFailedCount) {
        this.resourcesFailedCount = resourcesFailedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesRestoredCount")
    public Integer resourcesRestoredCount;
    public Restore withResourcesRestoredCount(Integer resourcesRestoredCount) {
        this.resourcesRestoredCount = resourcesRestoredCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreConfig")
    public RestoreConfig restoreConfig;
    public Restore withRestoreConfig(RestoreConfig restoreConfig) {
        this.restoreConfig = restoreConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public RestoreStateEnum state;
    public Restore withState(RestoreStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateReason")
    public String stateReason;
    public Restore withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Restore withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Restore withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumesRestoredCount")
    public Integer volumesRestoredCount;
    public Restore withVolumesRestoredCount(Integer volumesRestoredCount) {
        this.volumesRestoredCount = volumesRestoredCount;
        return this;
    }
}