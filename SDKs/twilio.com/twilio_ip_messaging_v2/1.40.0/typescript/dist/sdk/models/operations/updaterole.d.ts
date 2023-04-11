import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoleServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoleUpdateRoleRequest extends SpeakeasyBase {
    permission: string[];
}
export declare class UpdateRoleRequest extends SpeakeasyBase {
    requestBody?: UpdateRoleUpdateRoleRequest;
    serviceSid: string;
    sid: string;
}
export declare class UpdateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceRole?: shared.IpMessagingV2ServiceRole;
}
