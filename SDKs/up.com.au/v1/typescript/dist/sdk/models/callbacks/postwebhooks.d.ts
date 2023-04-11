import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
export declare class PostWebhooksEventRequest extends SpeakeasyBase {
    webhookEventCallback?: shared.WebhookEventCallback;
    /**
     * The SHA-256 HMAC signature of the raw request body, signed using
     *
     * @remarks
     * the `secretKey` of the webhook.
     *
     */
    xUpAuthenticitySignature?: string;
    /**
     * Automatically added
     */
    webhookURL: string;
}
