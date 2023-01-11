package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpAddressStatus {
    @JsonProperty("label")
    public String label;
    public IpAddressStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public IpAddressStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}