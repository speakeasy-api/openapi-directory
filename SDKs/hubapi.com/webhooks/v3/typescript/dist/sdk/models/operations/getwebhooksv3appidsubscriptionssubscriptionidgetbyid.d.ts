import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest extends SpeakeasyBase {
    appId: number;
    subscriptionId: number;
}
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    subscriptionResponse?: shared.SubscriptionResponse;
}
