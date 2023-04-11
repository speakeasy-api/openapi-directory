import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoleServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoleUpdateRoleRequest extends SpeakeasyBase {
    /**
     * A permission that you grant to the role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. Note that the update action replaces all previously assigned permissions with those defined in the update action. To remove a permission, do not include it in the subsequent update action. The values for this parameter depend on the role's `type`.
     */
    permission: string[];
}
export declare class UpdateRoleRequest extends SpeakeasyBase {
    requestBody?: UpdateRoleUpdateRoleRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to update the Role resource in.
     */
    serviceSid: string;
    /**
     * The SID of the Role resource to update.
     */
    sid: string;
}
export declare class UpdateRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceRole?: shared.ChatV2ServiceRole;
}
