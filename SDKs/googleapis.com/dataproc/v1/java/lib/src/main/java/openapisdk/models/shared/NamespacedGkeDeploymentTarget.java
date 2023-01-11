package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NamespacedGkeDeploymentTarget
 * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
**/
public class NamespacedGkeDeploymentTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterNamespace")
    public String clusterNamespace;
    public NamespacedGkeDeploymentTarget withClusterNamespace(String clusterNamespace) {
        this.clusterNamespace = clusterNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGkeCluster")
    public String targetGkeCluster;
    public NamespacedGkeDeploymentTarget withTargetGkeCluster(String targetGkeCluster) {
        this.targetGkeCluster = targetGkeCluster;
        return this;
    }
}