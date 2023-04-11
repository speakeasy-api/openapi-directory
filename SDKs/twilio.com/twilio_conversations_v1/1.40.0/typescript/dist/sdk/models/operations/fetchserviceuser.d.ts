import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceUserServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceUserRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to fetch the User resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the User resource to fetch. This value can be either the `sid` or the `identity` of the User resource to fetch.
     */
    sid: string;
}
export declare class FetchServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceUser?: shared.ConversationsV1ServiceServiceUser;
}
