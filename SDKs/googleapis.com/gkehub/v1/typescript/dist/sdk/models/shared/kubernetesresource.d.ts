import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceManifest } from "./resourcemanifest";
import { ResourceOptions } from "./resourceoptions";
/**
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
 */
export declare class KubernetesResource extends SpeakeasyBase {
    /**
     * Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.
     */
    connectResources?: ResourceManifest[];
    /**
     * Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership.
     */
    membershipCrManifest?: string;
    /**
     * Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.
     */
    membershipResources?: ResourceManifest[];
    /**
     * ResourceOptions represent options for Kubernetes resource generation.
     */
    resourceOptions?: ResourceOptions;
}
/**
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
 */
export declare class KubernetesResourceInput extends SpeakeasyBase {
    /**
     * Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership.
     */
    membershipCrManifest?: string;
    /**
     * ResourceOptions represent options for Kubernetes resource generation.
     */
    resourceOptions?: ResourceOptions;
}
