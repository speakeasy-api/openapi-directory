package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KubernetesResource
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
public class KubernetesResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectResources")
    public ResourceManifest[] connectResources;
    public KubernetesResource withConnectResources(ResourceManifest[] connectResources) {
        this.connectResources = connectResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipCrManifest")
    public String membershipCrManifest;
    public KubernetesResource withMembershipCrManifest(String membershipCrManifest) {
        this.membershipCrManifest = membershipCrManifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipResources")
    public ResourceManifest[] membershipResources;
    public KubernetesResource withMembershipResources(ResourceManifest[] membershipResources) {
        this.membershipResources = membershipResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceOptions")
    public ResourceOptions resourceOptions;
    public KubernetesResource withResourceOptions(ResourceOptions resourceOptions) {
        this.resourceOptions = resourceOptions;
        return this;
    }
}