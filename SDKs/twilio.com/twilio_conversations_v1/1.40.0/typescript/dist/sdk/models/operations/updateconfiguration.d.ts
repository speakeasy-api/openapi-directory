import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConfigurationUpdateConfigurationRequest extends SpeakeasyBase {
    /**
     * The SID of the default [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to use when creating a conversation.
     */
    defaultChatServiceSid?: string;
    /**
     * Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
     */
    defaultClosedTimer?: string;
    /**
     * Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
     */
    defaultInactiveTimer?: string;
    /**
     * The SID of the default [Messaging Service](https://www.twilio.com/docs/sms/services/api) to use when creating a conversation.
     */
    defaultMessagingServiceSid?: string;
}
export declare class UpdateConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1Configuration?: shared.ConversationsV1Configuration;
}
