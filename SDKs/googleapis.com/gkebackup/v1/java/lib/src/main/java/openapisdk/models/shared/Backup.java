package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Backup
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
public class Backup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allNamespaces")
    public Boolean allNamespaces;
    public Backup withAllNamespaces(Boolean allNamespaces) {
        this.allNamespaces = allNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterMetadata")
    public ClusterMetadata clusterMetadata;
    public Backup withClusterMetadata(ClusterMetadata clusterMetadata) {
        this.clusterMetadata = clusterMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completeTime")
    public String completeTime;
    public Backup withCompleteTime(String completeTime) {
        this.completeTime = completeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configBackupSizeBytes")
    public String configBackupSizeBytes;
    public Backup withConfigBackupSizeBytes(String configBackupSizeBytes) {
        this.configBackupSizeBytes = configBackupSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containsSecrets")
    public Boolean containsSecrets;
    public Backup withContainsSecrets(Boolean containsSecrets) {
        this.containsSecrets = containsSecrets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containsVolumeData")
    public Boolean containsVolumeData;
    public Backup withContainsVolumeData(Boolean containsVolumeData) {
        this.containsVolumeData = containsVolumeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Backup withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteLockDays")
    public Integer deleteLockDays;
    public Backup withDeleteLockDays(Integer deleteLockDays) {
        this.deleteLockDays = deleteLockDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteLockExpireTime")
    public String deleteLockExpireTime;
    public Backup withDeleteLockExpireTime(String deleteLockExpireTime) {
        this.deleteLockExpireTime = deleteLockExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Backup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public EncryptionKey encryptionKey;
    public Backup withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Backup withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Backup withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manual")
    public Boolean manual;
    public Backup withManual(Boolean manual) {
        this.manual = manual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Backup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podCount")
    public Integer podCount;
    public Backup withPodCount(Integer podCount) {
        this.podCount = podCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceCount")
    public Integer resourceCount;
    public Backup withResourceCount(Integer resourceCount) {
        this.resourceCount = resourceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retainDays")
    public Integer retainDays;
    public Backup withRetainDays(Integer retainDays) {
        this.retainDays = retainDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retainExpireTime")
    public String retainExpireTime;
    public Backup withRetainExpireTime(String retainExpireTime) {
        this.retainExpireTime = retainExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedApplications")
    public NamespacedNames selectedApplications;
    public Backup withSelectedApplications(NamespacedNames selectedApplications) {
        this.selectedApplications = selectedApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedNamespaces")
    public Namespaces selectedNamespaces;
    public Backup withSelectedNamespaces(Namespaces selectedNamespaces) {
        this.selectedNamespaces = selectedNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public String sizeBytes;
    public Backup withSizeBytes(String sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BackupStateEnum state;
    public Backup withState(BackupStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateReason")
    public String stateReason;
    public Backup withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Backup withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Backup withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeCount")
    public Integer volumeCount;
    public Backup withVolumeCount(Integer volumeCount) {
        this.volumeCount = volumeCount;
        return this;
    }
}