import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the Role resource to fetch.
     */
    sid: string;
}
export declare class FetchRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1Role?: shared.ConversationsV1Role;
}
