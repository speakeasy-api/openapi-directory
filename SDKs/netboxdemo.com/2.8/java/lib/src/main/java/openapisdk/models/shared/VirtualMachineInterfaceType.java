package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VirtualMachineInterfaceType {
    @JsonProperty("label")
    public VirtualMachineInterfaceTypeLabelEnum label;
    public VirtualMachineInterfaceType withLabel(VirtualMachineInterfaceTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public VirtualMachineInterfaceTypeValueEnum value;
    public VirtualMachineInterfaceType withValue(VirtualMachineInterfaceTypeValueEnum value) {
        this.value = value;
        return this;
    }
}