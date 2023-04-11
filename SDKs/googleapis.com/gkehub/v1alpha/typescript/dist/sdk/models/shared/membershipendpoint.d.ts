import { SpeakeasyBase } from "../../../internal/utils";
import { ApplianceCluster } from "./appliancecluster";
import { EdgeCluster } from "./edgecluster";
import { GkeCluster, GkeClusterInput } from "./gkecluster";
import { KubernetesMetadata } from "./kubernetesmetadata";
import { KubernetesResource, KubernetesResourceInput } from "./kubernetesresource";
import { MultiCloudCluster, MultiCloudClusterInput } from "./multicloudcluster";
import { OnPremCluster, OnPremClusterInput } from "./onpremcluster";
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
 */
export declare class MembershipEndpointInput extends SpeakeasyBase {
    /**
     * ApplianceCluster contains information specific to GDC Edge Appliance Clusters.
     */
    applianceCluster?: ApplianceCluster;
    /**
     * EdgeCluster contains information specific to Google Edge Clusters.
     */
    edgeCluster?: EdgeCluster;
    /**
     * GkeCluster contains information specific to GKE clusters.
     */
    gkeCluster?: GkeClusterInput;
    /**
     * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
     */
    kubernetesResource?: KubernetesResourceInput;
    /**
     * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
     */
    multiCloudCluster?: MultiCloudClusterInput;
    /**
     * OnPremCluster contains information specific to GKE On-Prem clusters.
     */
    onPremCluster?: OnPremClusterInput;
}
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
 */
export declare class MembershipEndpoint extends SpeakeasyBase {
    /**
     * ApplianceCluster contains information specific to GDC Edge Appliance Clusters.
     */
    applianceCluster?: ApplianceCluster;
    /**
     * EdgeCluster contains information specific to Google Edge Clusters.
     */
    edgeCluster?: EdgeCluster;
    /**
     * GkeCluster contains information specific to GKE clusters.
     */
    gkeCluster?: GkeCluster;
    /**
     * Output only. Whether the lifecycle of this membership is managed by a google cluster platform service.
     */
    googleManaged?: boolean;
    /**
     * KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
     */
    kubernetesMetadata?: KubernetesMetadata;
    /**
     * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
     */
    kubernetesResource?: KubernetesResource;
    /**
     * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
     */
    multiCloudCluster?: MultiCloudCluster;
    /**
     * OnPremCluster contains information specific to GKE On-Prem clusters.
     */
    onPremCluster?: OnPremCluster;
}
