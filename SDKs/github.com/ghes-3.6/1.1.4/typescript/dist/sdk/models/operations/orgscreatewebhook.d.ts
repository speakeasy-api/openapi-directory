import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.6/rest/reference/orgs#create-hook-config-params).
 */
export declare class OrgsCreateWebhookRequestBodyConfig extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    insecureSsl?: any;
    password?: string;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.6/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url: string;
    username?: string;
}
export declare class OrgsCreateWebhookRequestBody extends SpeakeasyBase {
    /**
     * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
     */
    active?: boolean;
    /**
     * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.6/rest/reference/orgs#create-hook-config-params).
     */
    config: OrgsCreateWebhookRequestBodyConfig;
    /**
     * Determines what [events](https://docs.github.com/enterprise-server@3.6/webhooks/event-payloads) the hook is triggered for. Set to `["*"]` to receive all possible events.
     */
    events?: string[];
    /**
     * Must be passed as "web".
     */
    name: string;
}
export declare class OrgsCreateWebhookRequest extends SpeakeasyBase {
    requestBody: OrgsCreateWebhookRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsCreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    orgHook?: shared.OrgHook;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
