package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestAccelerator
 * Specification of a set of guest accelerators attached to a machine.
**/
public class GuestAccelerator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorCount")
    public String acceleratorCount;
    public GuestAccelerator withAcceleratorCount(String acceleratorCount) {
        this.acceleratorCount = acceleratorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorType")
    public String acceleratorType;
    public GuestAccelerator withAcceleratorType(String acceleratorType) {
        this.acceleratorType = acceleratorType;
        return this;
    }
}