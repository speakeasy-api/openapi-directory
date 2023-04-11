import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUserDefinedMessageSubscriptionServerList: readonly ["https://api.twilio.com"];
export declare class CreateUserDefinedMessageSubscriptionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`. Default is `POST`.
 */
export declare enum CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
    /**
     * The URL we should call using the `method` to send user defined events to your application. URLs must contain a valid hostname (underscores are not permitted).
     */
    callback: string;
    /**
     * A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated.
     */
    idempotencyKey?: string;
    /**
     * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`. Default is `POST`.
     */
    method?: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
}
export declare class CreateUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Messages subscription is associated with. This refers to the Call SID that is producing the user defined messages.
     */
    callSid: string;
    requestBody?: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
}
export declare class CreateUserDefinedMessageSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountCallUserDefinedMessageSubscription?: shared.ApiV2010AccountCallUserDefinedMessageSubscription;
}
