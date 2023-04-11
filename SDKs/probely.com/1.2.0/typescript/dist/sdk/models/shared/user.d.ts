import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { UserTitleEnum } from "./usertitleenum";
/**
 * Event object.
 */
export declare class User extends SpeakeasyBase {
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * User's email (changing this resets the user's password and revokes existing tokens)
     */
    email?: string;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Deleted users are marked as not active
     */
    isActive?: boolean;
    /**
     * Account admin
     */
    isAdmin?: boolean;
    /**
     * Billing contact for the account
     */
    isBillingAdmin?: boolean;
    /**
     * User's name
     */
    name?: string;
    title?: UserTitleEnum;
}
