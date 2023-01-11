import { SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ConfigManagementMembershipState } from "./configmanagementmembershipstate";
import { IdentityServiceMembershipState } from "./identityservicemembershipstate";
import { MeteringMembershipState } from "./meteringmembershipstate";
import { PolicyControllerMembershipState } from "./policycontrollermembershipstate";
import { ServiceMeshMembershipState } from "./servicemeshmembershipstate";
import { FeatureState } from "./featurestate";
export declare class MembershipFeatureState extends SpeakeasyBase {
    appdevexperience?: AppDevExperienceFeatureState;
    configmanagement?: ConfigManagementMembershipState;
    fleetobservability?: Record<string, any>;
    identityservice?: IdentityServiceMembershipState;
    metering?: MeteringMembershipState;
    policycontroller?: PolicyControllerMembershipState;
    servicemesh?: ServiceMeshMembershipState;
    state?: FeatureState;
}
