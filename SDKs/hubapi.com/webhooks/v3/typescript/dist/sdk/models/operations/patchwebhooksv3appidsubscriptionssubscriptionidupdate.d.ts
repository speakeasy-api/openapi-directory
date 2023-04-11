import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest extends SpeakeasyBase {
    subscriptionPatchRequest: shared.SubscriptionPatchRequest;
    appId: number;
    subscriptionId: number;
}
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    subscriptionResponse?: shared.SubscriptionResponse;
}
