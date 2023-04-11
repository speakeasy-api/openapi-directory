import { SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ConfigManagementMembershipState } from "./configmanagementmembershipstate";
import { FeatureState } from "./featurestate";
import { IdentityServiceMembershipState } from "./identityservicemembershipstate";
import { ServiceMeshMembershipState } from "./servicemeshmembershipstate";
/**
 * MembershipFeatureState contains Feature status information for a single Membership.
 */
export declare class MembershipFeatureState extends SpeakeasyBase {
    /**
     * State for App Dev Exp Feature.
     */
    appdevexperience?: AppDevExperienceFeatureState;
    /**
     * **Anthos Config Management**: State for a single cluster.
     */
    configmanagement?: ConfigManagementMembershipState;
    /**
     * **FleetObservability**: An empty state left as an example membership-specific Feature state.
     */
    fleetobservability?: Record<string, any>;
    /**
     * **Anthos Identity Service**: State for a single Membership.
     */
    identityservice?: IdentityServiceMembershipState;
    /**
     * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
     */
    servicemesh?: ServiceMeshMembershipState;
    /**
     * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
     */
    state?: FeatureState;
}
