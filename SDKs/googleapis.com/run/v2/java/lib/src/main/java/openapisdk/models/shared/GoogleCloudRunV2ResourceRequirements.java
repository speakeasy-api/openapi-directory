package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ResourceRequirements
 * ResourceRequirements describes the compute resource requirements.
**/
public class GoogleCloudRunV2ResourceRequirements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuIdle")
    public Boolean cpuIdle;
    public GoogleCloudRunV2ResourceRequirements withCpuIdle(Boolean cpuIdle) {
        this.cpuIdle = cpuIdle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limits")
    public java.util.Map<String, String> limits;
    public GoogleCloudRunV2ResourceRequirements withLimits(java.util.Map<String, String> limits) {
        this.limits = limits;
        return this;
    }
}