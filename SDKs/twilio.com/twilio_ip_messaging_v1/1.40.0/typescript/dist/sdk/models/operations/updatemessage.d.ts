import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMessageServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body?: string;
}
export declare class UpdateMessageRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: UpdateMessageUpdateMessageRequest;
    serviceSid: string;
    sid: string;
}
export declare class UpdateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV1ServiceChannelMessage?: shared.IpMessagingV1ServiceChannelMessage;
}
