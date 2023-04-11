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
     * A permission that you grant to the role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role's `type` and are described in the documentation.
     */
    permission: string[];
}
export declare class UpdateRoleRequest extends SpeakeasyBase {
    requestBody?: UpdateRoleUpdateRoleRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to update the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Role resource to update.
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
    chatV1ServiceRole?: shared.ChatV1ServiceRole;
}
