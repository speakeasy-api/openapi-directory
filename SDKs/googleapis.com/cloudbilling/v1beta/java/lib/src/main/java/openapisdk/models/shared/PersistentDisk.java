package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersistentDisk
 * Specification of a persistent disk attached to a VM.
**/
public class PersistentDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSize")
    public Usage diskSize;
    public PersistentDisk withDiskSize(Usage diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public String diskType;
    public PersistentDisk withDiskType(String diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedIops")
    public Usage provisionedIops;
    public PersistentDisk withProvisionedIops(Usage provisionedIops) {
        this.provisionedIops = provisionedIops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public PersistentDiskScopeEnum scope;
    public PersistentDisk withScope(PersistentDiskScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}