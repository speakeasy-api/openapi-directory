import { SpeakeasyBase } from "../../../internal/utils";
import { HookResponse } from "./hookresponse";
export declare class HookConfig extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    digest?: string;
    email?: string;
    insecureSsl?: any;
    password?: string;
    room?: string;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.8/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    subdomain?: string;
    token?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url?: string;
}
/**
 * Webhooks for repositories.
 */
export declare class Hook extends SpeakeasyBase {
    /**
     * Determines whether the hook is actually triggered on pushes.
     */
    active: boolean;
    config: HookConfig;
    createdAt: Date;
    deliveriesUrl?: string;
    /**
     * Determines what events the hook is triggered for. Default: ['push'].
     */
    events: string[];
    /**
     * Unique identifier of the webhook.
     */
    id: number;
    lastResponse: HookResponse;
    /**
     * The name of a valid service, use 'web' for a webhook.
     */
    name: string;
    pingUrl: string;
    testUrl: string;
    type: string;
    updatedAt: Date;
    url: string;
}
