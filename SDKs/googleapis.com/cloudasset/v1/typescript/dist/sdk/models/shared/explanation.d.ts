import { SpeakeasyBase } from "../../../internal/utils";
import { Permissions } from "./permissions";
/**
 * Explanation about the IAM policy search result.
 */
export declare class Explanation extends SpeakeasyBase {
    /**
     * The map from roles to their included permissions that match the permission query (i.e., a query containing `policy.role.permissions:`). Example: if query `policy.role.permissions:compute.disk.get` matches a policy binding that contains owner role, the matched_permissions will be `{"roles/owner": ["compute.disk.get"]}`. The roles can also be found in the returned `policy` bindings. Note that the map is populated only for requests with permission queries.
     */
    matchedPermissions?: Record<string, Permissions>;
}
