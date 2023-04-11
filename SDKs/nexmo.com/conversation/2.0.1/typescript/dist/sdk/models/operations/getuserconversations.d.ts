import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetuserConversationsRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: string;
}
export declare class GetuserConversations200ApplicationJSONTimestamp extends SpeakeasyBase {
    /**
     * Timestamp
     */
    created?: string;
}
export declare class GetuserConversations200ApplicationJSON extends SpeakeasyBase {
    /**
     * The display name for the conversation. It does not have to be unique
     */
    displayName?: string;
    /**
     * A link towards a resources included in Conversation API
     */
    href?: string;
    /**
     * The unique identifier for this conversation
     */
    id?: string;
    /**
     * A link to an image for conversations' and users' avatars
     */
    imageUrl?: string;
    /**
     * Member ID
     */
    memberId?: string;
    /**
     * Unique name for a conversation
     */
    name?: string;
    /**
     * the id of the last event of the conversation (event's id is an incremental number
     */
    sequenceNumber?: number;
    /**
     * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
     */
    state?: shared.MemberStateEnum;
    timestamp?: GetuserConversations200ApplicationJSONTimestamp;
}
export declare class GetuserConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List user conversations
     */
    getuserConversations200ApplicationJSONObjects?: GetuserConversations200ApplicationJSON[];
}
