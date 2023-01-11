package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachedDisk
 * A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
**/
public class AttachedDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public AttachedDisk withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingDisk")
    public String existingDisk;
    public AttachedDisk withExistingDisk(String existingDisk) {
        this.existingDisk = existingDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newDisk")
    public Disk newDisk;
    public AttachedDisk withNewDisk(Disk newDisk) {
        this.newDisk = newDisk;
        return this;
    }
}