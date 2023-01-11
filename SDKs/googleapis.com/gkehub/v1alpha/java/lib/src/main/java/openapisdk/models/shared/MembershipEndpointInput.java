package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipEndpointInput
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
public class MembershipEndpointInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceCluster")
    public ApplianceCluster applianceCluster;
    public MembershipEndpointInput withApplianceCluster(ApplianceCluster applianceCluster) {
        this.applianceCluster = applianceCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edgeCluster")
    public EdgeCluster edgeCluster;
    public MembershipEndpointInput withEdgeCluster(EdgeCluster edgeCluster) {
        this.edgeCluster = edgeCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeCluster")
    public GkeClusterInput gkeCluster;
    public MembershipEndpointInput withGkeCluster(GkeClusterInput gkeCluster) {
        this.gkeCluster = gkeCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesResource")
    public KubernetesResourceInput kubernetesResource;
    public MembershipEndpointInput withKubernetesResource(KubernetesResourceInput kubernetesResource) {
        this.kubernetesResource = kubernetesResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiCloudCluster")
    public MultiCloudClusterInput multiCloudCluster;
    public MembershipEndpointInput withMultiCloudCluster(MultiCloudClusterInput multiCloudCluster) {
        this.multiCloudCluster = multiCloudCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onPremCluster")
    public OnPremClusterInput onPremCluster;
    public MembershipEndpointInput withOnPremCluster(OnPremClusterInput onPremCluster) {
        this.onPremCluster = onPremCluster;
        return this;
    }
}