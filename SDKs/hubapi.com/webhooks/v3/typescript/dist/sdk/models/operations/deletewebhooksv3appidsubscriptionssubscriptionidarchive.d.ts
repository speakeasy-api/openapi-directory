import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest extends SpeakeasyBase {
    appId: number;
    subscriptionId: number;
}
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
