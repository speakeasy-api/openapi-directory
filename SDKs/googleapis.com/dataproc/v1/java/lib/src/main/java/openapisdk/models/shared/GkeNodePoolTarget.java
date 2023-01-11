package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeNodePoolTarget
 * GKE node pools that Dataproc workloads run on.
**/
public class GkeNodePoolTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodePool")
    public String nodePool;
    public GkeNodePoolTarget withNodePool(String nodePool) {
        this.nodePool = nodePool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodePoolConfig")
    public GkeNodePoolConfig nodePoolConfig;
    public GkeNodePoolTarget withNodePoolConfig(GkeNodePoolConfig nodePoolConfig) {
        this.nodePoolConfig = nodePoolConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public GkeNodePoolTargetRolesEnum[] roles;
    public GkeNodePoolTarget withRoles(GkeNodePoolTargetRolesEnum[] roles) {
        this.roles = roles;
        return this;
    }
}