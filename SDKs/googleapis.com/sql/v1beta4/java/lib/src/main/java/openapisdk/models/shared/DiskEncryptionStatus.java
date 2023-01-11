package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiskEncryptionStatus
 * Disk encryption status for an instance.
**/
public class DiskEncryptionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DiskEncryptionStatus withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyVersionName")
    public String kmsKeyVersionName;
    public DiskEncryptionStatus withKmsKeyVersionName(String kmsKeyVersionName) {
        this.kmsKeyVersionName = kmsKeyVersionName;
        return this;
    }
}