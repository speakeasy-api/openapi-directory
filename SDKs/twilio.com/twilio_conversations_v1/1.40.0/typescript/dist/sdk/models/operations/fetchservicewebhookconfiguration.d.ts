import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceWebhookConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceWebhookConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceWebhookConfigurationRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid: string;
}
export declare class FetchServiceWebhookConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
