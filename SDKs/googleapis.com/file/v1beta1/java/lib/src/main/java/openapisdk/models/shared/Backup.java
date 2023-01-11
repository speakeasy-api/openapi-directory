package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Backup
 * A Filestore backup.
**/
public class Backup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityGb")
    public String capacityGb;
    public Backup withCapacityGb(String capacityGb) {
        this.capacityGb = capacityGb;
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
    @JsonProperty("description")
    public String description;
    public Backup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadBytes")
    public String downloadBytes;
    public Backup withDownloadBytes(String downloadBytes) {
        this.downloadBytes = downloadBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyName")
    public String kmsKeyName;
    public Backup withKmsKeyName(String kmsKeyName) {
        this.kmsKeyName = kmsKeyName;
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
    @JsonProperty("name")
    public String name;
    public Backup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfiesPzs")
    public Boolean satisfiesPzs;
    public Backup withSatisfiesPzs(Boolean satisfiesPzs) {
        this.satisfiesPzs = satisfiesPzs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFileShare")
    public String sourceFileShare;
    public Backup withSourceFileShare(String sourceFileShare) {
        this.sourceFileShare = sourceFileShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceInstance")
    public String sourceInstance;
    public Backup withSourceInstance(String sourceInstance) {
        this.sourceInstance = sourceInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceInstanceTier")
    public BackupSourceInstanceTierEnum sourceInstanceTier;
    public Backup withSourceInstanceTier(BackupSourceInstanceTierEnum sourceInstanceTier) {
        this.sourceInstanceTier = sourceInstanceTier;
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
    @JsonProperty("storageBytes")
    public String storageBytes;
    public Backup withStorageBytes(String storageBytes) {
        this.storageBytes = storageBytes;
        return this;
    }
}