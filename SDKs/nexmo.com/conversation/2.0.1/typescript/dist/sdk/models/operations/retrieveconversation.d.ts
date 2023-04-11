import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveConversationRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
}
export declare class RetrieveConversation200ApplicationJSONMembers extends SpeakeasyBase {
    /**
     * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
     */
    channel?: shared.Channel;
    initiator?: shared.Initiator;
    /**
     * Member ID
     */
    memberId?: string;
    /**
     * Unique name for a user
     */
    name?: string;
    /**
     * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
     */
    state?: shared.MemberStateEnum;
    timestamp?: shared.TimestampResMember;
    /**
     * User ID
     */
    userId?: string;
}
export declare class RetrieveConversation200ApplicationJSONProperties extends SpeakeasyBase {
    video?: boolean;
}
/**
 * Conversation Object
 */
export declare class RetrieveConversation200ApplicationJSON extends SpeakeasyBase {
    links?: shared.LinksConversation;
    /**
     * The API key for your account
     */
    apiKey?: string;
    /**
     * The display name for the conversation. It does not have to be unique
     */
    displayName?: string;
    /**
     * Users associated to this conversation as members
     */
    members?: RetrieveConversation200ApplicationJSONMembers[];
    /**
     * Unique name for a conversation
     */
    name?: string;
    numbers?: Record<string, any>;
    properties?: RetrieveConversation200ApplicationJSONProperties;
    /**
     * The last Event ID in this conversation. This ID can be used to [retrieve a specific event](#getEvent)
     */
    sequenceNumber?: string;
    timestamp?: shared.TimestampResConversation;
    /**
     * The unique identifier for this conversation
     */
    uuid: string;
}
export declare class RetrieveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve a conversation
     */
    retrieveConversation200ApplicationJSONObject?: RetrieveConversation200ApplicationJSON;
}
