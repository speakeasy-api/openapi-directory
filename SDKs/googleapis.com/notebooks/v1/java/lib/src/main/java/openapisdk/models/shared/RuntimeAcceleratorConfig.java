package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeAcceleratorConfig
 * Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
**/
public class RuntimeAcceleratorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreCount")
    public String coreCount;
    public RuntimeAcceleratorConfig withCoreCount(String coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RuntimeAcceleratorConfigTypeEnum type;
    public RuntimeAcceleratorConfig withType(RuntimeAcceleratorConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}