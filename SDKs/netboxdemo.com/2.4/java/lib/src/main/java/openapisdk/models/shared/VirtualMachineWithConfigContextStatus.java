package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VirtualMachineWithConfigContextStatus {
    @JsonProperty("label")
    public String label;
    public VirtualMachineWithConfigContextStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public VirtualMachineWithConfigContextStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}