import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAuthMethod, IdentityServiceAuthMethodInput } from "./identityserviceauthmethod";
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
 */
export declare class IdentityServiceMembershipSpec extends SpeakeasyBase {
    /**
     * A member may support multiple auth methods.
     */
    authMethods?: IdentityServiceAuthMethod[];
}
/**
 * **Anthos Identity Service**: Configuration for a single Membership.
 */
export declare class IdentityServiceMembershipSpecInput extends SpeakeasyBase {
    /**
     * A member may support multiple auth methods.
     */
    authMethods?: IdentityServiceAuthMethodInput[];
}
