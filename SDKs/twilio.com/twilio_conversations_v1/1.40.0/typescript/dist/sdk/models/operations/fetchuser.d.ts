import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUserRequest extends SpeakeasyBase {
    /**
     * The SID of the User resource to fetch. This value can be either the `sid` or the `identity` of the User resource to fetch.
     */
    sid: string;
}
export declare class FetchUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1User?: shared.ConversationsV1User;
}
