package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Disk
 * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. https://cloud.google.com/compute/docs/disks#pdspecs. https://cloud.google.com/compute/docs/disks#localssds.
**/
public class Disk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskInterface")
    public String diskInterface;
    public Disk withDiskInterface(String diskInterface) {
        this.diskInterface = diskInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Disk withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public String sizeGb;
    public Disk withSizeGb(String sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshot")
    public String snapshot;
    public Disk withSnapshot(String snapshot) {
        this.snapshot = snapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Disk withType(String type) {
        this.type = type;
        return this;
    }
}