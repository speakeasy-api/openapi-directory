package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeBackup
 * Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
**/
public class VolumeBackup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeTime")
    public String completeTime;
    public VolumeBackup withCompleteTime(String completeTime) {
        this.completeTime = completeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public VolumeBackup withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeBytes")
    public String diskSizeBytes;
    public VolumeBackup withDiskSizeBytes(String diskSizeBytes) {
        this.diskSizeBytes = diskSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public VolumeBackup withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public VolumeBackupFormatEnum format;
    public VolumeBackup withFormat(VolumeBackupFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VolumeBackup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePvc")
    public NamespacedName sourcePvc;
    public VolumeBackup withSourcePvc(NamespacedName sourcePvc) {
        this.sourcePvc = sourcePvc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public VolumeBackupStateEnum state;
    public VolumeBackup withState(VolumeBackupStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public VolumeBackup withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageBytes")
    public String storageBytes;
    public VolumeBackup withStorageBytes(String storageBytes) {
        this.storageBytes = storageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public VolumeBackup withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public VolumeBackup withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBackupHandle")
    public String volumeBackupHandle;
    public VolumeBackup withVolumeBackupHandle(String volumeBackupHandle) {
        this.volumeBackupHandle = volumeBackupHandle;
        return this;
    }
}