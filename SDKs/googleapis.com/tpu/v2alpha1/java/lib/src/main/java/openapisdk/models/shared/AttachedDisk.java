package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachedDisk
 * A node-attached disk resource. Next ID: 8;
**/
public class AttachedDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public AttachedDiskModeEnum mode;
    public AttachedDisk withMode(AttachedDiskModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDisk")
    public String sourceDisk;
    public AttachedDisk withSourceDisk(String sourceDisk) {
        this.sourceDisk = sourceDisk;
        return this;
    }
}