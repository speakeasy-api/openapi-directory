import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
