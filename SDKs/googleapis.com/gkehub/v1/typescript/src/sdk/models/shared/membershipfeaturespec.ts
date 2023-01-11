import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";



export class MembershipFeatureSpec extends SpeakeasyBase {
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
}


export class MembershipFeatureSpecInput extends SpeakeasyBase {
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
}
