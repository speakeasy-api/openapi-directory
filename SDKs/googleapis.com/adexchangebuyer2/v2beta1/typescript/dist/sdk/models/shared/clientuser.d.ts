import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the client user.
 */
export declare enum ClientUserStatusEnum {
    UserStatusUnspecified = "USER_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Disabled = "DISABLED"
}
/**
 * A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.
 */
export declare class ClientUser extends SpeakeasyBase {
    /**
     * Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation.
     */
    clientAccountId?: string;
    /**
     * User's email address. The value of this field is ignored in an update operation.
     */
    email?: string;
    /**
     * The status of the client user.
     */
    status?: ClientUserStatusEnum;
    /**
     * The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation.
     */
    userId?: string;
}
