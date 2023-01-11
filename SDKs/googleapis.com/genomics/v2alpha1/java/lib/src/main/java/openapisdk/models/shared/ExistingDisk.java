package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExistingDisk
 * Configuration for an existing disk to be attached to the VM.
**/
public class ExistingDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public String disk;
    public ExistingDisk withDisk(String disk) {
        this.disk = disk;
        return this;
    }
}