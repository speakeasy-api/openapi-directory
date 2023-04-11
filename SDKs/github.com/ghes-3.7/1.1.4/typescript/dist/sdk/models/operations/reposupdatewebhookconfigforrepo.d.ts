import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateWebhookConfigForRepoRequestBody extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    insecureSsl?: any;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.7/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url?: string;
}
export declare class ReposUpdateWebhookConfigForRepoRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateWebhookConfigForRepoRequestBody;
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUpdateWebhookConfigForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    webhookConfig?: shared.WebhookConfig;
}
