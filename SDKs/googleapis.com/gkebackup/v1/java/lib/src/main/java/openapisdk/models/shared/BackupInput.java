package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupInput
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
public class BackupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterMetadata")
    public ClusterMetadata clusterMetadata;
    public BackupInput withClusterMetadata(ClusterMetadata clusterMetadata) {
        this.clusterMetadata = clusterMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteLockDays")
    public Integer deleteLockDays;
    public BackupInput withDeleteLockDays(Integer deleteLockDays) {
        this.deleteLockDays = deleteLockDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BackupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public EncryptionKey encryptionKey;
    public BackupInput withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public BackupInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retainDays")
    public Integer retainDays;
    public BackupInput withRetainDays(Integer retainDays) {
        this.retainDays = retainDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedApplications")
    public NamespacedNames selectedApplications;
    public BackupInput withSelectedApplications(NamespacedNames selectedApplications) {
        this.selectedApplications = selectedApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedNamespaces")
    public Namespaces selectedNamespaces;
    public BackupInput withSelectedNamespaces(Namespaces selectedNamespaces) {
        this.selectedNamespaces = selectedNamespaces;
        return this;
    }
}