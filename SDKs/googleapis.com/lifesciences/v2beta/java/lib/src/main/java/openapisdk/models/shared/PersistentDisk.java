package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersistentDisk
 * Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
**/
public class PersistentDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public Integer sizeGb;
    public PersistentDisk withSizeGb(Integer sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceImage")
    public String sourceImage;
    public PersistentDisk withSourceImage(String sourceImage) {
        this.sourceImage = sourceImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PersistentDisk withType(String type) {
        this.type = type;
        return this;
    }
}