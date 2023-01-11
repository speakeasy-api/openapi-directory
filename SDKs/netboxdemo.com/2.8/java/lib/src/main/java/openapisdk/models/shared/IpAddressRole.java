package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpAddressRole {
    @JsonProperty("label")
    public IpAddressRoleLabelEnum label;
    public IpAddressRole withLabel(IpAddressRoleLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public IpAddressRoleValueEnum value;
    public IpAddressRole withValue(IpAddressRoleValueEnum value) {
        this.value = value;
        return this;
    }
}