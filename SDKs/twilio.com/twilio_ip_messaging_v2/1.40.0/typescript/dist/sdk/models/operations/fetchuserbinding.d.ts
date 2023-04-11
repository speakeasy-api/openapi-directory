import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchUserBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUserBindingRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
    userSid: string;
}
export declare class FetchUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceUserUserBinding?: shared.IpMessagingV2ServiceUserUserBinding;
}
