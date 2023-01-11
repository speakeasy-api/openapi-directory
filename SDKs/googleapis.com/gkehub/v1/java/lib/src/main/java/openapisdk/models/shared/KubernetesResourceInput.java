package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KubernetesResourceInput
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
public class KubernetesResourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipCrManifest")
    public String membershipCrManifest;
    public KubernetesResourceInput withMembershipCrManifest(String membershipCrManifest) {
        this.membershipCrManifest = membershipCrManifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceOptions")
    public ResourceOptions resourceOptions;
    public KubernetesResourceInput withResourceOptions(ResourceOptions resourceOptions) {
        this.resourceOptions = resourceOptions;
        return this;
    }
}