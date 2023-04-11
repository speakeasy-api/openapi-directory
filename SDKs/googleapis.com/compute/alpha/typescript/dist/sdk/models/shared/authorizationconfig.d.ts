import { SpeakeasyBase } from "../../../internal/utils";
import { RbacPolicy } from "./rbacpolicy";
/**
 * [Deprecated] Authorization configuration provides service-level and method-level access control for a service. control for a service.
 */
export declare class AuthorizationConfig extends SpeakeasyBase {
    /**
     * List of RbacPolicies.
     */
    policies?: RbacPolicy[];
}
