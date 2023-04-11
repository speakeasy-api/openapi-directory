import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchChannelRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV1ServiceChannel?: shared.IpMessagingV1ServiceChannel;
}
