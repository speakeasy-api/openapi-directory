import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2WebhookSubscriptionsIdRequestBody extends SpeakeasyBase {
    /**
     * Enable or disable the webhook subscription
     */
    enabled?: boolean;
}
export declare class PutV2WebhookSubscriptionsIdRequest extends SpeakeasyBase {
    requestBody?: PutV2WebhookSubscriptionsIdRequestBody;
    /**
     * The Webhook Suscription id to update
     */
    id: number;
}
export declare class PutV2WebhookSubscriptionsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
