import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsUpdateWebhookConfigForOrgRequestBody extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    insecureSsl?: any;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url?: string;
}
export declare class OrgsUpdateWebhookConfigForOrgRequest extends SpeakeasyBase {
    requestBody?: OrgsUpdateWebhookConfigForOrgRequestBody;
    hookId: number;
    org: string;
}
export declare class OrgsUpdateWebhookConfigForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    webhookConfig?: shared.WebhookConfig;
}
