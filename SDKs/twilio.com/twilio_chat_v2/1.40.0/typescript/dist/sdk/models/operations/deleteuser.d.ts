import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the User resource from.
     */
    serviceSid: string;
    /**
     * The SID of the User resource to delete. This value can be either the `sid` or the `identity` of the User resource to delete.
     */
    sid: string;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
