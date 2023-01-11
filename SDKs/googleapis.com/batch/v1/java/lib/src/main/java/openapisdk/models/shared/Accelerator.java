package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Accelerator
 * Accelerator describes Compute Engine accelerators to be attached to the VM.
**/
public class Accelerator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public Accelerator withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installGpuDrivers")
    public Boolean installGpuDrivers;
    public Accelerator withInstallGpuDrivers(Boolean installGpuDrivers) {
        this.installGpuDrivers = installGpuDrivers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Accelerator withType(String type) {
        this.type = type;
        return this;
    }
}