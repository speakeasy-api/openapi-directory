import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Role type.
 */
export declare enum RoleKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Role = "ROLE",
    ClusterRole = "CLUSTER_ROLE"
}
/**
 * Kubernetes Role or ClusterRole.
 */
export declare class Role extends SpeakeasyBase {
    /**
     * Role type.
     */
    kind?: RoleKindEnum;
    /**
     * Role name.
     */
    name?: string;
    /**
     * Role namespace.
     */
    ns?: string;
}
