import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceParticipantConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceParticipantConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceParticipantConversationRequest extends SpeakeasyBase {
    /**
     * A unique string identifier for the conversation participant who's not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded.
     */
    address?: string;
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant Conversations resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
     */
    identity?: string;
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
export declare class ListServiceParticipantConversationListServiceParticipantConversationResponseMeta extends SpeakeasyBase {
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
export declare class ListServiceParticipantConversationListServiceParticipantConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ServiceServiceParticipantConversation[];
    meta?: ListServiceParticipantConversationListServiceParticipantConversationResponseMeta;
}
export declare class ListServiceParticipantConversationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceParticipantConversationResponse?: ListServiceParticipantConversationListServiceParticipantConversationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
