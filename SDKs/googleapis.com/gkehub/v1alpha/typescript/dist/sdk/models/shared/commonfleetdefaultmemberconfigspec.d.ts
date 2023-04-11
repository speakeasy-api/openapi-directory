import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceMembershipSpec, IdentityServiceMembershipSpecInput } from "./identityservicemembershipspec";
/**
 * CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet
 */
export declare class CommonFleetDefaultMemberConfigSpec extends SpeakeasyBase {
    /**
     * **Anthos Identity Service**: Configuration for a single Membership.
     */
    identityservice?: IdentityServiceMembershipSpec;
}
/**
 * CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet
 */
export declare class CommonFleetDefaultMemberConfigSpecInput extends SpeakeasyBase {
    /**
     * **Anthos Identity Service**: Configuration for a single Membership.
     */
    identityservice?: IdentityServiceMembershipSpecInput;
}
