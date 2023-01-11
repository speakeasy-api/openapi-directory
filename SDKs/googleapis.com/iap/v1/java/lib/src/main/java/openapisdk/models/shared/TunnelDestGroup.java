package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TunnelDestGroup
 * A TunnelDestGroup.
**/
public class TunnelDestGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrs")
    public String[] cidrs;
    public TunnelDestGroup withCidrs(String[] cidrs) {
        this.cidrs = cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdns")
    public String[] fqdns;
    public TunnelDestGroup withFqdns(String[] fqdns) {
        this.fqdns = fqdns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TunnelDestGroup withName(String name) {
        this.name = name;
        return this;
    }
}