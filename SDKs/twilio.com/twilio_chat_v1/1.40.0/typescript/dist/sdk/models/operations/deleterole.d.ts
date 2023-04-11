import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRoleServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Role resource to delete.
     */
    sid: string;
}
export declare class DeleteRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
