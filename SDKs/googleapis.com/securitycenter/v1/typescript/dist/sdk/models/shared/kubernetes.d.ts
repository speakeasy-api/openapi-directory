import { SpeakeasyBase } from "../../../internal/utils";
import { AccessReview } from "./accessreview";
import { GoogleCloudSecuritycenterV1Binding } from "./googlecloudsecuritycenterv1binding";
import { Node } from "./node";
import { NodePool } from "./nodepool";
import { Pod } from "./pod";
import { Role } from "./role";
/**
 * Kubernetes-related attributes.
 */
export declare class Kubernetes extends SpeakeasyBase {
    /**
     * Provides information on any Kubernetes access reviews (i.e. privilege checks) relevant to the finding.
     */
    accessReviews?: AccessReview[];
    /**
     * Provides Kubernetes role binding information for findings that involve RoleBindings or ClusterRoleBindings.
     */
    bindings?: GoogleCloudSecuritycenterV1Binding[];
    /**
     * GKE Node Pools associated with the finding. This field will contain NodePool information for each Node, when it is available.
     */
    nodePools?: NodePool[];
    /**
     * Provides Kubernetes Node information.
     */
    nodes?: Node[];
    /**
     * Kubernetes Pods associated with the finding. This field will contain Pod records for each container that is owned by a Pod.
     */
    pods?: Pod[];
    /**
     * Provides Kubernetes role information for findings that involve Roles or ClusterRoles.
     */
    roles?: Role[];
}
