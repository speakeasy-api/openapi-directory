import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserServerList: readonly ["https://chat.twilio.com"];
export declare class FetchUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUserRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the User resource to fetch.
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
    chatV1ServiceUser?: shared.ChatV1ServiceUser;
}
