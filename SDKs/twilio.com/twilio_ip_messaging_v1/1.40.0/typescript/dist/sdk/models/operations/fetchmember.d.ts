import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMemberRequest extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV1ServiceChannelMember?: shared.IpMessagingV1ServiceChannelMember;
}
