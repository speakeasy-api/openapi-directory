import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSubscribedEventServerList: readonly ["https://events.twilio.com"];
export declare class FetchSubscribedEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSubscribedEventRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Subscription.
     */
    subscriptionSid: string;
    /**
     * Type of event being subscribed to.
     */
    type: string;
}
export declare class FetchSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
