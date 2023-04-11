import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateValidationRequestServerList: readonly ["https://api.twilio.com"];
export declare class CreateValidationRequestSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default is `POST`.
 */
export declare enum CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateValidationRequestCreateValidationRequestRequest extends SpeakeasyBase {
    /**
     * The number of seconds to delay before initiating the verification call. Can be an integer between `0` and `60`, inclusive. The default is `0`.
     */
    callDelay?: number;
    /**
     * The digits to dial after connecting the verification call.
     */
    extension?: string;
    /**
     * A descriptive string that you create to describe the new caller ID resource. It can be up to 64 characters long. The default value is a formatted version of the phone number.
     */
    friendlyName?: string;
    /**
     * The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information about the verification process to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default is `POST`.
     */
    statusCallbackMethod?: CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
}
export declare class CreateValidationRequestRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the new caller ID resource.
     */
    accountSid: string;
    requestBody?: CreateValidationRequestCreateValidationRequestRequest;
}
export declare class CreateValidationRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountValidationRequest?: shared.ApiV2010AccountValidationRequest;
}
