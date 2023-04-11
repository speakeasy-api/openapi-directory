import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserBindingServerList: readonly ["https://chat.twilio.com"];
export declare class FetchUserBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUserBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the User Binding resource from.
     */
    serviceSid: string;
    /**
     * The SID of the User Binding resource to fetch.
     */
    sid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) with the User Binding resource to fetch.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    userSid: string;
}
export declare class FetchUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceUserUserBinding?: shared.ChatV2ServiceUserUserBinding;
}
