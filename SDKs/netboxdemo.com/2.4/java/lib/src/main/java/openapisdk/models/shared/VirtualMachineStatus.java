package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VirtualMachineStatus {
    @JsonProperty("label")
    public String label;
    public VirtualMachineStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public VirtualMachineStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}