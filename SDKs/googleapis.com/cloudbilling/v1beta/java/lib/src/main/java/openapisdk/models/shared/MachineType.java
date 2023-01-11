package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MachineType
 * Specification of machine series, memory, and number of vCPUs.
**/
public class MachineType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customMachineType")
    public CustomMachineType customMachineType;
    public MachineType withCustomMachineType(CustomMachineType customMachineType) {
        this.customMachineType = customMachineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedMachineType")
    public PredefinedMachineType predefinedMachineType;
    public MachineType withPredefinedMachineType(PredefinedMachineType predefinedMachineType) {
        this.predefinedMachineType = predefinedMachineType;
        return this;
    }
}