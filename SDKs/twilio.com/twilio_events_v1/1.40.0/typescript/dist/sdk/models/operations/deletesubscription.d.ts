import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class DeleteSubscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this Subscription.
     */
    sid: string;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
