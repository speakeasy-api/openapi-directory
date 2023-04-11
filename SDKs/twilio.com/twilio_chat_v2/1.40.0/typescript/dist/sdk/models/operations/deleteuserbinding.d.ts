import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserBindingServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteUserBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the User Binding resource from.
     */
    serviceSid: string;
    /**
     * The SID of the User Binding resource to delete.
     */
    sid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) with the User Binding resources to delete.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    userSid: string;
}
export declare class DeleteUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
