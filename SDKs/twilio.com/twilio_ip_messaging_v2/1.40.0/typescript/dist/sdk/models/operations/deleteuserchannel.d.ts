import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteUserChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserChannelRequest extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    userSid: string;
}
export declare class DeleteUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
