import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSubscriptionsRequest extends SpeakeasyBase {
    /**
     * ID of event subscription - can be obtained from web hook response
     */
    subscriptionId: string;
}
export declare class GetEventSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Event subscriptions
     */
    eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
