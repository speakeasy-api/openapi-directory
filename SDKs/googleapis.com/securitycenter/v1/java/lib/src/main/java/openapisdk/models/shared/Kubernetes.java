package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Kubernetes
 * Kubernetes related attributes.
**/
public class Kubernetes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessReviews")
    public AccessReview[] accessReviews;
    public Kubernetes withAccessReviews(AccessReview[] accessReviews) {
        this.accessReviews = accessReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public GoogleCloudSecuritycenterV1Binding[] bindings;
    public Kubernetes withBindings(GoogleCloudSecuritycenterV1Binding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodePools")
    public NodePool[] nodePools;
    public Kubernetes withNodePools(NodePool[] nodePools) {
        this.nodePools = nodePools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public Node[] nodes;
    public Kubernetes withNodes(Node[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pods")
    public Pod[] pods;
    public Kubernetes withPods(Pod[] pods) {
        this.pods = pods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public Role[] roles;
    public Kubernetes withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
}