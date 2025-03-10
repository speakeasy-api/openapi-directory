import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateConversationHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationEnumWebhookEnabledTypeEnum;
}
export declare class UpdateConversationUpdateConversationRequest extends SpeakeasyBase {
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
export declare class UpdateConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConversationRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UpdateConversationPathParams;
    headers: UpdateConversationHeaders;
    request?: UpdateConversationUpdateConversationRequest;
    security: UpdateConversationSecurity;
}
export declare class UpdateConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Conversation?: shared.ConversationsV1Conversation;
}
