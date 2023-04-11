import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoleServerList: readonly ["https://chat.twilio.com"];
export declare class FetchRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Role resource to fetch.
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
    chatV1ServiceRole?: shared.ChatV1ServiceRole;
}
