import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { MembershipSpec } from "./membershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";



export class MembershipFeatureSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anthosobservability" })
  anthosobservability?: AnthosObservabilityMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=cloudbuild" })
  cloudbuild?: MembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=fleetInherited" })
  fleetInherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpecInput;

  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=policycontroller" })
  policycontroller?: PolicyControllerMembershipSpec;
}


export class MembershipFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anthosobservability" })
  anthosobservability?: AnthosObservabilityMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=cloudbuild" })
  cloudbuild?: MembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=configmanagement" })
  configmanagement?: ConfigManagementMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=fleetInherited" })
  fleetInherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identityservice" })
  identityservice?: IdentityServiceMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh?: ServiceMeshMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=policycontroller" })
  policycontroller?: PolicyControllerMembershipSpec;
}
