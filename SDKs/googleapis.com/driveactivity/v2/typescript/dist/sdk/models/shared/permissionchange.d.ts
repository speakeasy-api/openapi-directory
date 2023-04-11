import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * A change of the permission setting on an item.
 */
export declare class PermissionChange extends SpeakeasyBase {
    /**
     * The set of permissions added by this change.
     */
    addedPermissions?: Permission[];
    /**
     * The set of permissions removed by this change.
     */
    removedPermissions?: Permission[];
}
