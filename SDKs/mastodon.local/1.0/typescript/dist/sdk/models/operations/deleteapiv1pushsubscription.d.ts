import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1PushSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Updating a PushSubscription to only receive mention alerts
     */
    deleteApiV1PushSubscription200ApplicationJSONObject?: Record<string, any>;
}
