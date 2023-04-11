import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateShortCodeServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateShortCodeCreateShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the ShortCode resource being added to the Service.
     */
    shortCodeSid: string;
}
export declare class CreateShortCodeRequest extends SpeakeasyBase {
    requestBody?: CreateShortCodeCreateShortCodeRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1ServiceShortCode?: shared.MessagingV1ServiceShortCode;
}
