import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessage } from "./servicemeshanalysismessage";
import { ServiceMeshControlPlaneManagement } from "./servicemeshcontrolplanemanagement";
import { ServiceMeshDataPlaneManagement } from "./servicemeshdataplanemanagement";
/**
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
 */
export declare class ServiceMeshMembershipState extends SpeakeasyBase {
    /**
     * Output only. Results of running Service Mesh analyzers.
     */
    analysisMessages?: ServiceMeshAnalysisMessage[];
    /**
     * The API version (i.e. Istio CRD version) for configuring service mesh in this cluster. This version is influenced by the `default_channel` field.
     */
    configApiVersion?: string;
    /**
     * Status of control plane management.
     */
    controlPlaneManagement?: ServiceMeshControlPlaneManagement;
    /**
     * Status of data plane management. Only reported per-member.
     */
    dataPlaneManagement?: ServiceMeshDataPlaneManagement;
}
