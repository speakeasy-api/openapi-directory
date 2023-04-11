import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec, IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
import { MembershipSpec } from "./membershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
 */
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    /**
     * **Anthosobservability**: Per-Membership Feature spec.
     */
    anthosobservability?: AnthosObservabilityMembershipSpec;
    /**
     * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
     */
    cloudbuild?: MembershipSpec;
    /**
     * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
     */
    configmanagement?: ConfigManagementMembershipSpec;
    /**
     * True if value of `feature_spec` was inherited from a fleet-level default.
     */
    fleetInherited?: boolean;
    /**
     * **FleetObservability**: The membership-specific input for FleetObservability feature.
     */
    fleetobservability?: Record<string, any>;
    /**
     * **Anthos Identity Service**: Configuration for a single Membership.
     */
    identityservice?: IdentityServiceMembershipSpec;
    /**
     * **Service Mesh**: Spec for a single Membership for the servicemesh feature
     */
    mesh?: ServiceMeshMembershipSpec;
    /**
     * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
     */
    policycontroller?: PolicyControllerMembershipSpec;
}
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
 */
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    /**
     * **Anthosobservability**: Per-Membership Feature spec.
     */
    anthosobservability?: AnthosObservabilityMembershipSpec;
    /**
     * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
     */
    cloudbuild?: MembershipSpec;
    /**
     * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
     */
    configmanagement?: ConfigManagementMembershipSpec;
    /**
     * True if value of `feature_spec` was inherited from a fleet-level default.
     */
    fleetInherited?: boolean;
    /**
     * **FleetObservability**: The membership-specific input for FleetObservability feature.
     */
    fleetobservability?: Record<string, any>;
    /**
     * **Anthos Identity Service**: Configuration for a single Membership.
     */
    identityservice?: IdentityServiceMembershipSpecInput;
    /**
     * **Service Mesh**: Spec for a single Membership for the servicemesh feature
     */
    mesh?: ServiceMeshMembershipSpec;
    /**
     * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
     */
    policycontroller?: PolicyControllerMembershipSpec;
}
