import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSubscribedEventServerList: readonly ["https://events.twilio.com"];
export declare class CreateSubscribedEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSubscribedEventCreateSubscribedEventRequest extends SpeakeasyBase {
    /**
     * The schema version that the subscription should use.
     */
    schemaVersion?: number;
    /**
     * Type of event being subscribed to.
     */
    type: string;
}
export declare class CreateSubscribedEventRequest extends SpeakeasyBase {
    requestBody?: CreateSubscribedEventCreateSubscribedEventRequest;
    /**
     * The unique SID identifier of the Subscription.
     */
    subscriptionSid: string;
}
export declare class CreateSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
