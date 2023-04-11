import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2WebhookSubscriptionsIdRequest extends SpeakeasyBase {
    /**
     * The id for the Webhook Subscription
     */
    id: number;
}
export declare class GetV2WebhookSubscriptionsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
