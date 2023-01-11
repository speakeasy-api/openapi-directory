package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpAddressFamily {
    @JsonProperty("label")
    public IpAddressFamilyLabelEnum label;
    public IpAddressFamily withLabel(IpAddressFamilyLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public IpAddressFamily withValue(Long value) {
        this.value = value;
        return this;
    }
}