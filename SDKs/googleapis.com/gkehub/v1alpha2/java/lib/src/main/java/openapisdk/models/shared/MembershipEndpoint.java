package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipEndpoint
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
public class MembershipEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceCluster")
    public ApplianceCluster applianceCluster;
    public MembershipEndpoint withApplianceCluster(ApplianceCluster applianceCluster) {
        this.applianceCluster = applianceCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edgeCluster")
    public EdgeCluster edgeCluster;
    public MembershipEndpoint withEdgeCluster(EdgeCluster edgeCluster) {
        this.edgeCluster = edgeCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeCluster")
    public GkeCluster gkeCluster;
    public MembershipEndpoint withGkeCluster(GkeCluster gkeCluster) {
        this.gkeCluster = gkeCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesMetadata")
    public KubernetesMetadata kubernetesMetadata;
    public MembershipEndpoint withKubernetesMetadata(KubernetesMetadata kubernetesMetadata) {
        this.kubernetesMetadata = kubernetesMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesResource")
    public KubernetesResource kubernetesResource;
    public MembershipEndpoint withKubernetesResource(KubernetesResource kubernetesResource) {
        this.kubernetesResource = kubernetesResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiCloudCluster")
    public MultiCloudCluster multiCloudCluster;
    public MembershipEndpoint withMultiCloudCluster(MultiCloudCluster multiCloudCluster) {
        this.multiCloudCluster = multiCloudCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onPremCluster")
    public OnPremCluster onPremCluster;
    public MembershipEndpoint withOnPremCluster(OnPremCluster onPremCluster) {
        this.onPremCluster = onPremCluster;
        return this;
    }
}