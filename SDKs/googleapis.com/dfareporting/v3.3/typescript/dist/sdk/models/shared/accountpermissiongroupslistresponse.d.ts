import { SpeakeasyBase } from "../../../internal/utils";
import { AccountPermissionGroup } from "./accountpermissiongroup";
/**
 * Account Permission Group List Response
 */
export declare class AccountPermissionGroupsListResponse extends SpeakeasyBase {
    /**
     * Account permission group collection.
     */
    accountPermissionGroups?: AccountPermissionGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".
     */
    kind?: string;
}
