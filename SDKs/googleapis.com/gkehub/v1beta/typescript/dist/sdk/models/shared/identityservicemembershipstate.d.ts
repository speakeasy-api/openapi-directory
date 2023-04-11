import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
/**
 * Deployment state on this member
 */
export declare enum IdentityServiceMembershipStateStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    Ok = "OK",
    Error = "ERROR"
}
/**
 * **Anthos Identity Service**: State for a single Membership.
 */
export declare class IdentityServiceMembershipState extends SpeakeasyBase {
    /**
     * The reason of the failure.
     */
    failureReason?: string;
    /**
     * Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK.
     */
    installedVersion?: string;
    /**
     * **Anthos Identity Service**: Configuration for a single Membership.
     */
    memberConfig?: IdentityServiceMembershipSpec;
    /**
     * Deployment state on this member
     */
    state?: IdentityServiceMembershipStateStateEnum;
}
