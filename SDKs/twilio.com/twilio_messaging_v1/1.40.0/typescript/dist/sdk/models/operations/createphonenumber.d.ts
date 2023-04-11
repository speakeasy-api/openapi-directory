import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreatePhoneNumberServerList: readonly ["https://messaging.twilio.com"];
export declare class CreatePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreatePhoneNumberCreatePhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the Phone Number being added to the Service.
     */
    phoneNumberSid: string;
}
export declare class CreatePhoneNumberRequest extends SpeakeasyBase {
    requestBody?: CreatePhoneNumberCreatePhoneNumberRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1ServicePhoneNumber?: shared.MessagingV1ServicePhoneNumber;
}
