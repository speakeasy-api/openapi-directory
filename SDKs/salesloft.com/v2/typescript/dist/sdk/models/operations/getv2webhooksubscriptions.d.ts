import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2WebhookSubscriptionsRequest extends SpeakeasyBase {
    /**
     * Filters webhook subscriptions by whether is enabled or not.
     */
    enabled?: boolean;
}
export declare class GetV2WebhookSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
