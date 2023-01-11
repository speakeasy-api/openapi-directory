package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupConfig
 * BackupConfig defines the configuration of Backups created via this BackupPlan.
**/
public class BackupConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allNamespaces")
    public Boolean allNamespaces;
    public BackupConfig withAllNamespaces(Boolean allNamespaces) {
        this.allNamespaces = allNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public EncryptionKey encryptionKey;
    public BackupConfig withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeSecrets")
    public Boolean includeSecrets;
    public BackupConfig withIncludeSecrets(Boolean includeSecrets) {
        this.includeSecrets = includeSecrets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeVolumeData")
    public Boolean includeVolumeData;
    public BackupConfig withIncludeVolumeData(Boolean includeVolumeData) {
        this.includeVolumeData = includeVolumeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedApplications")
    public NamespacedNames selectedApplications;
    public BackupConfig withSelectedApplications(NamespacedNames selectedApplications) {
        this.selectedApplications = selectedApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedNamespaces")
    public Namespaces selectedNamespaces;
    public BackupConfig withSelectedNamespaces(Namespaces selectedNamespaces) {
        this.selectedNamespaces = selectedNamespaces;
        return this;
    }
}