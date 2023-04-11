import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class FetchSubscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSubscriptionRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this Subscription.
     */
    sid: string;
}
export declare class FetchSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1Subscription?: shared.EventsV1Subscription;
}
