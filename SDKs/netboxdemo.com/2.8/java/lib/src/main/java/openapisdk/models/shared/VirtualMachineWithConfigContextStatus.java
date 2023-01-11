package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VirtualMachineWithConfigContextStatus {
    @JsonProperty("label")
    public VirtualMachineWithConfigContextStatusLabelEnum label;
    public VirtualMachineWithConfigContextStatus withLabel(VirtualMachineWithConfigContextStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public VirtualMachineWithConfigContextStatusValueEnum value;
    public VirtualMachineWithConfigContextStatus withValue(VirtualMachineWithConfigContextStatusValueEnum value) {
        this.value = value;
        return this;
    }
}