import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
import { Subject } from "./subject";
/**
 * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
 */
export declare class GoogleCloudSecuritycenterV1Binding extends SpeakeasyBase {
    /**
     * Name for binding.
     */
    name?: string;
    /**
     * Namespace for binding.
     */
    ns?: string;
    /**
     * Kubernetes Role or ClusterRole.
     */
    role?: Role;
    /**
     * Represents one or more subjects that are bound to the role. Not always available for PATCH requests.
     */
    subjects?: Subject[];
}
