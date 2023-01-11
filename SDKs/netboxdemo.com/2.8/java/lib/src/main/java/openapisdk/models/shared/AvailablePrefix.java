package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailablePrefix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public Long family;
    public AvailablePrefix withFamily(Long family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public AvailablePrefix withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public NestedVrf vrf;
    public AvailablePrefix withVrf(NestedVrf vrf) {
        this.vrf = vrf;
        return this;
    }
}