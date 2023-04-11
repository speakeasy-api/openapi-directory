import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWellKnownMercureSubscriptionsTopicRequest extends SpeakeasyBase {
    topic: string;
}
export declare class GetWellKnownMercureSubscriptionsTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The list of active subscriptions
     */
    subscriptions?: shared.Subscriptions;
}
