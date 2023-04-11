import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An ID for a user or group as seen in Permission items.
 */
export declare class PermissionId extends SpeakeasyBase {
    /**
     * The permission ID.
     */
    id?: string;
    /**
     * This is always drive#permissionId.
     */
    kind?: string;
}
