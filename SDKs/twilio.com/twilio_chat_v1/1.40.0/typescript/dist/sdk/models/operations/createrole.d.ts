import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateRoleServerList: readonly ["https://chat.twilio.com"];
export declare class CreateRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateRoleCreateRoleRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
     */
    friendlyName: string;
    /**
     * A permission that you grant to the new role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role's `type` and are described in the documentation.
     */
    permission: string[];
    type: shared.RoleEnumRoleTypeEnum;
}
export declare class CreateRoleRequest extends SpeakeasyBase {
    requestBody?: CreateRoleCreateRoleRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV1ServiceRole?: shared.ChatV1ServiceRole;
}
