import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
