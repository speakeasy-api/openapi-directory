import { SpeakeasyBase } from "../../../internal/utils";
import { AccountPermission } from "./accountpermission";
/**
 * Account Permission List Response
 */
export declare class AccountPermissionsListResponse extends SpeakeasyBase {
    /**
     * Account permission collection.
     */
    accountPermissions?: AccountPermission[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".
     */
    kind?: string;
}
