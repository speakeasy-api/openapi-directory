package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PredefinedMachineType
 * Specification of a predefined machine type.
**/
public class PredefinedMachineType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public PredefinedMachineType withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
}