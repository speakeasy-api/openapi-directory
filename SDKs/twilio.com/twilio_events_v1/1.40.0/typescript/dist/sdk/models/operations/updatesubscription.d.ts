import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class UpdateSubscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSubscriptionUpdateSubscriptionRequest extends SpeakeasyBase {
    /**
     * A human readable description for the Subscription.
     */
    description?: string;
    /**
     * The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
     */
    sinkSid?: string;
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    requestBody?: UpdateSubscriptionUpdateSubscriptionRequest;
    /**
     * A 34 character string that uniquely identifies this Subscription.
     */
    sid: string;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1Subscription?: shared.EventsV1Subscription;
}
