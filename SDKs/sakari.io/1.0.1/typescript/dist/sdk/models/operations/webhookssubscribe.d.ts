import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebhooksSubscribeSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare enum WebhooksSubscribeRequestBodyEventTypesEnum {
    ContactCreated = "contact-created",
    ContactUpdated = "contact-updated",
    ContactRemoved = "contact-removed",
    MessageReceived = "message-received",
    MessageSent = "message-sent",
    MessageStatus = "message-status",
    ConversationStarted = "conversation-started",
    ContactOptOut = "contact-opt-out",
    ContactOptIn = "contact-opt-in",
    ListOptOut = "list-opt-out",
    ListOptIn = "list-opt-in"
}
export declare class WebhooksSubscribeRequestBody extends SpeakeasyBase {
    eventTypes?: WebhooksSubscribeRequestBodyEventTypesEnum[];
    url?: string;
}
export declare class WebhooksSubscribeRequest extends SpeakeasyBase {
    requestBody: WebhooksSubscribeRequestBody;
    /**
     * Account to apply operations to
     */
    accountId: string;
}
export declare class WebhooksSubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    webhookResponse?: shared.WebhookResponse;
}
