package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupInput
 * A Filestore backup.
**/
public class BackupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BackupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyName")
    public String kmsKeyName;
    public BackupInput withKmsKeyName(String kmsKeyName) {
        this.kmsKeyName = kmsKeyName;
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
    @JsonProperty("sourceFileShare")
    public String sourceFileShare;
    public BackupInput withSourceFileShare(String sourceFileShare) {
        this.sourceFileShare = sourceFileShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceInstance")
    public String sourceInstance;
    public BackupInput withSourceInstance(String sourceInstance) {
        this.sourceInstance = sourceInstance;
        return this;
    }
}