package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VirtualMachineInterfaceMode {
    @JsonProperty("label")
    public VirtualMachineInterfaceModeLabelEnum label;
    public VirtualMachineInterfaceMode withLabel(VirtualMachineInterfaceModeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public VirtualMachineInterfaceModeValueEnum value;
    public VirtualMachineInterfaceMode withValue(VirtualMachineInterfaceModeValueEnum value) {
        this.value = value;
        return this;
    }
}