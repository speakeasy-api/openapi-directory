import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSubscribedEventServerList: readonly ["https://events.twilio.com"];
export declare class UpdateSubscribedEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSubscribedEventUpdateSubscribedEventRequest extends SpeakeasyBase {
    /**
     * The schema version that the subscription should use.
     */
    schemaVersion?: number;
}
export declare class UpdateSubscribedEventRequest extends SpeakeasyBase {
    requestBody?: UpdateSubscribedEventUpdateSubscribedEventRequest;
    /**
     * The unique SID identifier of the Subscription.
     */
    subscriptionSid: string;
    /**
     * Type of event being subscribed to.
     */
    type: string;
}
export declare class UpdateSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
