package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcceleratorConfig
 * Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
**/
public class AcceleratorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorCount")
    public Integer acceleratorCount;
    public AcceleratorConfig withAcceleratorCount(Integer acceleratorCount) {
        this.acceleratorCount = acceleratorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorTypeUri")
    public String acceleratorTypeUri;
    public AcceleratorConfig withAcceleratorTypeUri(String acceleratorTypeUri) {
        this.acceleratorTypeUri = acceleratorTypeUri;
        return this;
    }
}