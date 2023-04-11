import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteServiceRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to delete the Role resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the Role resource to delete.
     */
    sid: string;
}
export declare class DeleteServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
