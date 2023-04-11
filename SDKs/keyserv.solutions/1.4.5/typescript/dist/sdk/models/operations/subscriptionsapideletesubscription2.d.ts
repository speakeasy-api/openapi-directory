import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubscriptionsApiDeleteSubscription2Request extends SpeakeasyBase {
    xApiKey: string;
    keep: boolean;
    serial: string;
}
export declare class SubscriptionsApiDeleteSubscription2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
