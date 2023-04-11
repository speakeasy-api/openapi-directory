import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRoleServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRoleRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
