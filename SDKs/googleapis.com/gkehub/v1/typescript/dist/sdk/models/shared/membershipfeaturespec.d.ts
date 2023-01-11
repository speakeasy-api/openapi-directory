import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
export declare class MembershipFeatureSpec extends SpeakeasyBase {
    configmanagement?: ConfigManagementMembershipSpec;
    fleetInherited?: boolean;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipSpec;
    mesh?: ServiceMeshMembershipSpec;
}
export declare class MembershipFeatureSpecInput extends SpeakeasyBase {
    configmanagement?: ConfigManagementMembershipSpec;
    fleetInherited?: boolean;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipSpecInput;
    mesh?: ServiceMeshMembershipSpec;
}
