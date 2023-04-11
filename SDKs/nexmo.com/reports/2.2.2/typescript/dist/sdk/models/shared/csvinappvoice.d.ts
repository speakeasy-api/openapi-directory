import { SpeakeasyBase } from "../../../internal/utils";
/**
 * In App Voice
 */
export declare class CsvInAppVoice extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Search only for requests attached to a particular Application ID.
     */
    applicationId?: string;
    /**
     * Search for messages with this `client_ref`.
     */
    clientRef?: string;
    /**
     * Search only for events sent to this particular Conversation. This should include the "CON-" prefix.
     */
    conversationId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Date of the end of the call.
     */
    dateEnd?: Date;
    /**
     * Date of the start of the call.
     */
    dateStart?: Date;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Id of the related CDR.
     */
    id?: string;
    /**
     * Id of the call leg.
     */
    legId?: string;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the termination of the In-App call.
     */
    status?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
    /**
     * User id in the conversation.
     */
    userId?: string;
}
