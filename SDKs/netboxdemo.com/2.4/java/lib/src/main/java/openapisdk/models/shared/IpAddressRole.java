package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpAddressRole {
    @JsonProperty("label")
    public String label;
    public IpAddressRole withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public IpAddressRole withValue(Long value) {
        this.value = value;
        return this;
    }
}