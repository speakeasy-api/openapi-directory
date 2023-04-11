import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteUserBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserBindingRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
    userSid: string;
}
export declare class DeleteUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
