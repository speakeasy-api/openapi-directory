import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
 */
export declare class AccountPermissionGroup extends SpeakeasyBase {
    /**
     * ID of this account permission group.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".
     */
    kind?: string;
    /**
     * Name of this account permission group.
     */
    name?: string;
}
