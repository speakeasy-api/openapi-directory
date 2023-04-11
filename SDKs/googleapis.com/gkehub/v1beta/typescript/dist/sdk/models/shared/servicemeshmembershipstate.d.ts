import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshControlPlaneManagement } from "./servicemeshcontrolplanemanagement";
import { ServiceMeshDataPlaneManagement } from "./servicemeshdataplanemanagement";
/**
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
 */
export declare class ServiceMeshMembershipState extends SpeakeasyBase {
    /**
     * Status of control plane management.
     */
    controlPlaneManagement?: ServiceMeshControlPlaneManagement;
    /**
     * Status of data plane management. Only reported per-member.
     */
    dataPlaneManagement?: ServiceMeshDataPlaneManagement;
}
