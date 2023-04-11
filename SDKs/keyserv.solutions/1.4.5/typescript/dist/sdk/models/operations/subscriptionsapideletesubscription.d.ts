import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubscriptionsApiDeleteSubscriptionRequest extends SpeakeasyBase {
    xApiKey: string;
    keep: boolean;
    serial: string;
}
export declare class SubscriptionsApiDeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
