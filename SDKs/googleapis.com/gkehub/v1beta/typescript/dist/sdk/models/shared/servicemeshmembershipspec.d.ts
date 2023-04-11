import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Enables automatic control plane management.
 */
export declare enum ServiceMeshMembershipSpecControlPlaneEnum {
    ControlPlaneManagementUnspecified = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
/**
 * Enables automatic Service Mesh management.
 */
export declare enum ServiceMeshMembershipSpecManagementEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    ManagementAutomatic = "MANAGEMENT_AUTOMATIC",
    ManagementManual = "MANAGEMENT_MANUAL"
}
/**
 * **Service Mesh**: Spec for a single Membership for the servicemesh feature
 */
export declare class ServiceMeshMembershipSpec extends SpeakeasyBase {
    /**
     * Enables automatic control plane management.
     */
    controlPlane?: ServiceMeshMembershipSpecControlPlaneEnum;
    /**
     * Enables automatic Service Mesh management.
     */
    management?: ServiceMeshMembershipSpecManagementEnum;
}
