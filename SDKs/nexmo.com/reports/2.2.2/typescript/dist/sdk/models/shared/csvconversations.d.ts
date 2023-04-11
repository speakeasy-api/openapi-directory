import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conversations
 */
export declare class CsvConversations extends SpeakeasyBase {
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
     * Date the event was created.
     */
    creationDate?: Date;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Id of the related CDR.
     */
    id?: string;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
    /**
     * User id in the conversation.
     */
    userId?: string;
}
