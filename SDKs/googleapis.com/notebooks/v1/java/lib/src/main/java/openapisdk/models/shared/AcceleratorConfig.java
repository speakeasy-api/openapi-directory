package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcceleratorConfig
 * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
**/
public class AcceleratorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreCount")
    public String coreCount;
    public AcceleratorConfig withCoreCount(String coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AcceleratorConfigTypeEnum type;
    public AcceleratorConfig withType(AcceleratorConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}