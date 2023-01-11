import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { CloudBuildMembershipSpec } from "./cloudbuildmembershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { MembershipSpec } from "./membershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: CloudBuildMembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetInherited?: boolean;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
    workloadcertificate?: MembershipSpec;
}
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityMembershipSpec;
    cloudbuild?: CloudBuildMembershipSpec;
    configmanagement?: ConfigManagementMembershipSpec;
    fleetInherited?: boolean;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipSpecInput;
    mesh?: ServiceMeshMembershipSpec;
    policycontroller?: PolicyControllerMembershipSpec;
    workloadcertificate?: MembershipSpec;
}
