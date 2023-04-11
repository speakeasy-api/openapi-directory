import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConversationParticipantRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for participants.
     */
    conversationSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListConversationParticipantListConversationParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListConversationParticipantListConversationParticipantResponse extends SpeakeasyBase {
    meta?: ListConversationParticipantListConversationParticipantResponseMeta;
    participants?: shared.ConversationsV1ConversationConversationParticipant[];
}
export declare class ListConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConversationParticipantResponse?: ListConversationParticipantListConversationParticipantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
