import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to fetch the Role resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the Role resource to fetch.
     */
    sid: string;
}
export declare class FetchServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
