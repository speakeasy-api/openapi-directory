package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resources
 * Machine resources for a version.
**/
public class Resources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public Double cpu;
    public Resources withCpu(Double cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskGb")
    public Double diskGb;
    public Resources withDiskGb(Double diskGb) {
        this.diskGb = diskGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyReference")
    public String kmsKeyReference;
    public Resources withKmsKeyReference(String kmsKeyReference) {
        this.kmsKeyReference = kmsKeyReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryGb")
    public Double memoryGb;
    public Resources withMemoryGb(Double memoryGb) {
        this.memoryGb = memoryGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public Resources withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}