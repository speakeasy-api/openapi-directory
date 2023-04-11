import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCallServerList: readonly ["https://api.twilio.com"];
export declare class UpdateCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 */
export declare enum UpdateCallUpdateCallRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use when calling the `url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 */
export declare enum UpdateCallUpdateCallRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use when requesting the `status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 */
export declare enum UpdateCallUpdateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateCallUpdateCallRequest extends SpeakeasyBase {
    /**
     * The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
     */
    fallbackMethod?: UpdateCallUpdateCallRequestFallbackMethodEnum;
    /**
     * The URL that we call using the `fallback_method` if an error occurs when requesting or executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is ignored.
     */
    fallbackUrl?: string;
    /**
     * The HTTP method we should use when calling the `url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
     */
    method?: UpdateCallUpdateCallRequestMethodEnum;
    status?: shared.CallEnumUpdateStatusEnum;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your application. If no `status_callback_event` is specified, we will send the `completed` status. If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use when requesting the `status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
     */
    statusCallbackMethod?: UpdateCallUpdateCallRequestStatusCallbackMethodEnum;
    /**
     * The maximum duration of the call in seconds. Constraints depend on account and configuration.
     */
    timeLimit?: number;
    /**
     * TwiML instructions for the call Twilio will use without fetching Twiml from url. Twiml and url parameters are mutually exclusive
     */
    twiml?: string;
    /**
     * The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).
     */
    url?: string;
}
export declare class UpdateCallRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to update.
     */
    accountSid: string;
    requestBody?: UpdateCallUpdateCallRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Call resource to update
     */
    sid: string;
}
export declare class UpdateCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
