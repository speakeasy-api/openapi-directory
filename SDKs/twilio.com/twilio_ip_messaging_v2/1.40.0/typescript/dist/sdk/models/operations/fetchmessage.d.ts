import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMessageServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMessageRequest extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceChannelMessage?: shared.IpMessagingV2ServiceChannelMessage;
}
