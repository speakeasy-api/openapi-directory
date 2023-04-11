import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains properties of a Campaign Manager subaccount.
 */
export declare class Subaccount extends SpeakeasyBase {
    /**
     * ID of the account that contains this subaccount. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * IDs of the available user role permissions for this subaccount.
     */
    availablePermissionIds?: string[];
    /**
     * ID of this subaccount. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".
     */
    kind?: string;
    /**
     * Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.
     */
    name?: string;
}
