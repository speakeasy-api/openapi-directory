import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksWebhookIdPingRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the webhook.
     *
     * @remarks
     *
     */
    webhookId: string;
}
export declare class PostWebhooksWebhookIdPingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    webhookEventCallback?: shared.WebhookEventCallback;
}
