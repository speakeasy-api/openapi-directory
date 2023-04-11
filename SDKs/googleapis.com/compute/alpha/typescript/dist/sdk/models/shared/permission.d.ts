import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionConstraint } from "./permissionconstraint";
/**
 * [Deprecated] All fields defined in a permission are ANDed.
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * Extra custom constraints. The constraints are ANDed together.
     */
    constraints?: PermissionConstraint[];
    /**
     * Used in Ingress or Egress Gateway cases to specify hosts that the policy applies to. Exact match, prefix match, and suffix match are supported.
     */
    hosts?: string[];
    /**
     * HTTP method.
     */
    methods?: string[];
    /**
     * Negate of hosts. Specifies exclusions.
     */
    notHosts?: string[];
    /**
     * Negate of methods. Specifies exclusions.
     */
    notMethods?: string[];
    /**
     * Negate of paths. Specifies exclusions.
     */
    notPaths?: string[];
    /**
     * Negate of ports. Specifies exclusions.
     */
    notPorts?: string[];
    /**
     * HTTP request paths or gRPC methods. Exact match, prefix match, and suffix match are supported.
     */
    paths?: string[];
    /**
     * Port names or numbers.
     */
    ports?: string[];
}
