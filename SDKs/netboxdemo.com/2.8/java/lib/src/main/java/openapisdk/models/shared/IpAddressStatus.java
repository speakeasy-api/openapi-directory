package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpAddressStatus {
    @JsonProperty("label")
    public IpAddressStatusLabelEnum label;
    public IpAddressStatus withLabel(IpAddressStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public IpAddressStatusValueEnum value;
    public IpAddressStatus withValue(IpAddressStatusValueEnum value) {
        this.value = value;
        return this;
    }
}