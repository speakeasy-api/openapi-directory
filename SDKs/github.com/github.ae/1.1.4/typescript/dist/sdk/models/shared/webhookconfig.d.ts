import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration object of the webhook
 */
export declare class WebhookConfig extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    insecureSsl?: any;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/github-ae@latest/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url?: string;
}
