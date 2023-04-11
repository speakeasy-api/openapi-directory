import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class CreateSubscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSubscriptionCreateSubscriptionRequest extends SpeakeasyBase {
    /**
     * A human readable description for the Subscription **This value should not contain PII.**
     */
    description: string;
    /**
     * The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
     */
    sinkSid: string;
    /**
     * An array of objects containing the subscribed Event Types
     */
    types: any[];
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    eventsV1Subscription?: shared.EventsV1Subscription;
}
