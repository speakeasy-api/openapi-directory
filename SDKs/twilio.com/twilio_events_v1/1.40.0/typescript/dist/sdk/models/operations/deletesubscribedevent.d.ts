import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSubscribedEventServerList: readonly ["https://events.twilio.com"];
export declare class DeleteSubscribedEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSubscribedEventRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Subscription.
     */
    subscriptionSid: string;
    /**
     * Type of event being subscribed to.
     */
    type: string;
}
export declare class DeleteSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
