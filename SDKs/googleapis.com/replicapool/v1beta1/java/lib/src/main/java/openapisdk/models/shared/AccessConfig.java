package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessConfig
 * A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
**/
public class AccessConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccessConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("natIp")
    public String natIp;
    public AccessConfig withNatIp(String natIp) {
        this.natIp = natIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccessConfig withType(String type) {
        this.type = type;
        return this;
    }
}