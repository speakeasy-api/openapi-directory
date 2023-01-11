package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableIp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public AvailableIp withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public Long family;
    public AvailableIp withFamily(Long family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public NestedVrf vrf;
    public AvailableIp withVrf(NestedVrf vrf) {
        this.vrf = vrf;
        return this;
    }
}