import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAlphaSenderServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateAlphaSenderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAlphaSenderCreateAlphaSenderRequest extends SpeakeasyBase {
    /**
     * The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z, a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot contain only numbers.
     */
    alphaSender: string;
}
export declare class CreateAlphaSenderRequest extends SpeakeasyBase {
    requestBody?: CreateAlphaSenderCreateAlphaSenderRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1ServiceAlphaSender?: shared.MessagingV1ServiceAlphaSender;
}
