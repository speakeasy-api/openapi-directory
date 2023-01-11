package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Role
 * Kubernetes Role or ClusterRole.
**/
public class Role {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public RoleKindEnum kind;
    public Role withKind(RoleKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Role withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ns")
    public String ns;
    public Role withNs(String ns) {
        this.ns = ns;
        return this;
    }
}