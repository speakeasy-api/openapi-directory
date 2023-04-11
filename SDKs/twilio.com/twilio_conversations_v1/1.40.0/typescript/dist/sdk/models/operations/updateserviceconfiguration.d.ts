import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceConfigurationUpdateServiceConfigurationRequest extends SpeakeasyBase {
    /**
     * The service-level role assigned to users when they are added to the service. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultChatServiceRoleSid?: string;
    /**
     * The conversation-level role assigned to a conversation creator when they join a new conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultConversationCreatorRoleSid?: string;
    /**
     * The conversation-level role assigned to users when they are added to a conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultConversationRoleSid?: string;
    /**
     * Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Conversations Service. The default is `false`.
     */
    reachabilityEnabled?: boolean;
}
export declare class UpdateServiceConfigurationRequest extends SpeakeasyBase {
    /**
     * The SID of the Service configuration resource to update.
     */
    chatServiceSid: string;
    requestBody?: UpdateServiceConfigurationUpdateServiceConfigurationRequest;
}
export declare class UpdateServiceConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConfiguration?: shared.ConversationsV1ServiceServiceConfiguration;
}
