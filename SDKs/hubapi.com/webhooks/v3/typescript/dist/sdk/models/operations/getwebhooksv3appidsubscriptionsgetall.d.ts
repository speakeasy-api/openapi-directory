import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksV3AppIdSubscriptionsGetAllSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetWebhooksV3AppIdSubscriptionsGetAllRequest extends SpeakeasyBase {
    appId: number;
}
export declare class GetWebhooksV3AppIdSubscriptionsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    subscriptionListResponse?: shared.SubscriptionListResponse;
}
