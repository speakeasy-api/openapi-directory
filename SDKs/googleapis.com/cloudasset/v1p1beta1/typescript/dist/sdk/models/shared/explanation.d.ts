import { SpeakeasyBase } from "../../../internal/utils";
import { Permissions } from "./permissions";
/**
 * Explanation about the IAM policy search result.
 */
export declare class Explanation extends SpeakeasyBase {
    /**
     * The map from roles to their included permission matching the permission query (e.g. containing `policy.role.permissions:`). Example role string: "roles/compute.instanceAdmin". The roles can also be found in the returned `policy` bindings. Note that the map is populated only if requesting with a permission query.
     */
    matchedPermissions?: Record<string, Permissions>;
}
