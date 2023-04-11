import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Key/value pairs to provide settings for this webhook.
 */
export declare class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    /**
     * Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
     */
    insecureSsl?: string;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://docs.github.com/enterprise-server@3.5/webhooks/event-payloads/#delivery-headers) header.
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url: string;
}
export declare class EnterpriseAdminUpdateGlobalWebhookRequestBody extends SpeakeasyBase {
    /**
     * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
     */
    active?: boolean;
    /**
     * Key/value pairs to provide settings for this webhook.
     */
    config?: EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;
    /**
     * The [events](https://docs.github.com/enterprise-server@3.5/webhooks/event-payloads) that trigger this webhook. A global webhook can be triggered by `user` and `organization` events. Default: `user` and `organization`.
     */
    events?: string[];
}
export declare class EnterpriseAdminUpdateGlobalWebhookRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminUpdateGlobalWebhookRequestBody;
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
}
export declare class EnterpriseAdminUpdateGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    globalHook2?: shared.GlobalHook2;
}
