import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWellKnownMercureSubscriptionsTopicSubscriberRequest extends SpeakeasyBase {
    subscriber: string;
    topic: string;
}
export declare class GetWellKnownMercureSubscriptionsTopicSubscriberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The list of active subscriptions
     */
    subscriptions?: shared.Subscriptions;
}
