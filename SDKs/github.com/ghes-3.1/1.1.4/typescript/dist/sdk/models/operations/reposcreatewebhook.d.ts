import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#create-hook-config-params).
 */
export declare class ReposCreateWebhookRequestBodyConfig extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    digest?: string;
    insecureSsl?: any;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.1/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    token?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url?: string;
}
export declare class ReposCreateWebhookRequestBody extends SpeakeasyBase {
    /**
     * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
     */
    active?: boolean;
    /**
     * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#create-hook-config-params).
     */
    config?: ReposCreateWebhookRequestBodyConfig;
    /**
     * Determines what [events](https://docs.github.com/enterprise-server@3.1/webhooks/event-payloads) the hook is triggered for.
     */
    events?: string[];
    /**
     * Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
     */
    name?: string;
}
export declare class ReposCreateWebhookRequest extends SpeakeasyBase {
    requestBody?: ReposCreateWebhookRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    hook?: shared.Hook;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
