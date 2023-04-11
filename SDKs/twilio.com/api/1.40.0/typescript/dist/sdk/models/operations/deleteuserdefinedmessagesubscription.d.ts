import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserDefinedMessageSubscriptionServerList: readonly ["https://api.twilio.com"];
export declare class DeleteUserDefinedMessageSubscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message Subscription is associated with. This refers to the Call SID that is producing the User Defined Messages.
     */
    callSid: string;
    /**
     * The SID that uniquely identifies this User Defined Message Subscription.
     */
    sid: string;
}
export declare class DeleteUserDefinedMessageSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
