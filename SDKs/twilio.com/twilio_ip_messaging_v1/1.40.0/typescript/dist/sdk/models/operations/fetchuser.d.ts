import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUserRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV1ServiceUser?: shared.IpMessagingV1ServiceUser;
}
