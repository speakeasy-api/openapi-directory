package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchedulerAcceleratorConfig
 * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported.
**/
public class SchedulerAcceleratorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreCount")
    public String coreCount;
    public SchedulerAcceleratorConfig withCoreCount(String coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SchedulerAcceleratorConfigTypeEnum type;
    public SchedulerAcceleratorConfig withType(SchedulerAcceleratorConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}