import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateRoleServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateRoleCreateRoleRequest extends SpeakeasyBase {
    friendlyName: string;
    permission: string[];
    type: shared.RoleEnumRoleTypeEnum;
}
export declare class CreateRoleRequest extends SpeakeasyBase {
    requestBody?: CreateRoleCreateRoleRequest;
    serviceSid: string;
}
export declare class CreateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceRole?: shared.IpMessagingV2ServiceRole;
}
