import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConfigurationWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConfigurationWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest extends SpeakeasyBase {
    /**
     * The list of webhook event triggers that are enabled for this Service: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`
     */
    filters?: string[];
    /**
     * The HTTP method to be used when sending a webhook request.
     */
    method?: string;
    /**
     * The absolute url the post-event webhook request should be sent to.
     */
    postWebhookUrl?: string;
    /**
     * The absolute url the pre-event webhook request should be sent to.
     */
    preWebhookUrl?: string;
    target?: shared.ConfigurationWebhookEnumTargetEnum;
}
export declare class UpdateConfigurationWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConfigurationConfigurationWebhook?: shared.ConversationsV1ConfigurationConfigurationWebhook;
}
