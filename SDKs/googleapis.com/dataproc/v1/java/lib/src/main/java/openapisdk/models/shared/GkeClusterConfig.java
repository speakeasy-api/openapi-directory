package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeClusterConfig
 * The cluster's GKE config.
**/
public class GkeClusterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusterTarget")
    public String gkeClusterTarget;
    public GkeClusterConfig withGkeClusterTarget(String gkeClusterTarget) {
        this.gkeClusterTarget = gkeClusterTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespacedGkeDeploymentTarget")
    public NamespacedGkeDeploymentTarget namespacedGkeDeploymentTarget;
    public GkeClusterConfig withNamespacedGkeDeploymentTarget(NamespacedGkeDeploymentTarget namespacedGkeDeploymentTarget) {
        this.namespacedGkeDeploymentTarget = namespacedGkeDeploymentTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodePoolTarget")
    public GkeNodePoolTarget[] nodePoolTarget;
    public GkeClusterConfig withNodePoolTarget(GkeNodePoolTarget[] nodePoolTarget) {
        this.nodePoolTarget = nodePoolTarget;
        return this;
    }
}