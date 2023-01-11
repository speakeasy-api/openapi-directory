package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeRestore
 * Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
**/
public class VolumeRestore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeTime")
    public String completeTime;
    public VolumeRestore withCompleteTime(String completeTime) {
        this.completeTime = completeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public VolumeRestore withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public VolumeRestore withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VolumeRestore withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public VolumeRestoreStateEnum state;
    public VolumeRestore withState(VolumeRestoreStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public VolumeRestore withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPvc")
    public NamespacedName targetPvc;
    public VolumeRestore withTargetPvc(NamespacedName targetPvc) {
        this.targetPvc = targetPvc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public VolumeRestore withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public VolumeRestore withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBackup")
    public String volumeBackup;
    public VolumeRestore withVolumeBackup(String volumeBackup) {
        this.volumeBackup = volumeBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeHandle")
    public String volumeHandle;
    public VolumeRestore withVolumeHandle(String volumeHandle) {
        this.volumeHandle = volumeHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeType")
    public VolumeRestoreVolumeTypeEnum volumeType;
    public VolumeRestore withVolumeType(VolumeRestoreVolumeTypeEnum volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}