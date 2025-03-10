import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateConversationHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationEnumWebhookEnabledTypeEnum;
}
export declare class CreateConversationCreateConversationRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    messagingServiceSid?: string;
    state?: shared.ConversationEnumStateEnum;
    timersClosed?: string;
    timersInactive?: string;
    uniqueName?: string;
}
export declare class CreateConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConversationRequest extends SpeakeasyBase {
    serverURL?: string;
    headers: CreateConversationHeaders;
    request?: CreateConversationCreateConversationRequest;
    security: CreateConversationSecurity;
}
export declare class CreateConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Conversation?: shared.ConversationsV1Conversation;
}
