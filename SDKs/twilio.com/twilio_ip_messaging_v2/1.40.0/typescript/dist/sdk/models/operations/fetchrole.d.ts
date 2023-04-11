import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoleServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoleRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceRole?: shared.IpMessagingV2ServiceRole;
}
