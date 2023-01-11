package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Accelerator
 * Identifies Data Fusion accelerators for an instance.
**/
public class Accelerator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorType")
    public AcceleratorAcceleratorTypeEnum acceleratorType;
    public Accelerator withAcceleratorType(AcceleratorAcceleratorTypeEnum acceleratorType) {
        this.acceleratorType = acceleratorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AcceleratorStateEnum state;
    public Accelerator withState(AcceleratorStateEnum state) {
        this.state = state;
        return this;
    }
}