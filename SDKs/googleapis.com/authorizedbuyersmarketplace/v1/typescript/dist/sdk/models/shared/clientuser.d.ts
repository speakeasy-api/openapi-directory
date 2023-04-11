import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The state of the client user.
 */
export declare enum ClientUserStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Invited = "INVITED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
 */
export declare class ClientUser extends SpeakeasyBase {
    /**
     * Required. The client user's email address that has to be unique across all users for the same client.
     */
    email?: string;
    /**
     * Output only. The resource name of the client user. Format: `buyers/{accountId}/clients/{clientAccountId}/users/{userId}`
     */
    name?: string;
    /**
     * Output only. The state of the client user.
     */
    state?: ClientUserStateEnum;
}
/**
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
 */
export declare class ClientUserInput extends SpeakeasyBase {
    /**
     * Required. The client user's email address that has to be unique across all users for the same client.
     */
    email?: string;
}
