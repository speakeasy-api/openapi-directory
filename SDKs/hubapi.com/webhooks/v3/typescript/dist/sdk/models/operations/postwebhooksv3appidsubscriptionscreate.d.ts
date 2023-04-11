import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksV3AppIdSubscriptionsCreateSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PostWebhooksV3AppIdSubscriptionsCreateRequest extends SpeakeasyBase {
    subscriptionCreateRequest: shared.SubscriptionCreateRequest;
    appId: number;
}
export declare class PostWebhooksV3AppIdSubscriptionsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    subscriptionResponse?: shared.SubscriptionResponse;
}
