import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { MembershipSpec } from "./membershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: MembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetInherited?: boolean;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipSpecInput;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
}
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: MembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetInherited?: boolean;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
}
