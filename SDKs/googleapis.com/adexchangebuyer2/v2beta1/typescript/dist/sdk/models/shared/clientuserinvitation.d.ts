import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
 */
export declare class ClientUserInvitation extends SpeakeasyBase {
    /**
     * Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations.
     */
    clientAccountId?: string;
    /**
     * The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer.
     */
    email?: string;
    /**
     * The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations.
     */
    invitationId?: string;
}
