import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceRoleUpdateServiceRoleRequest extends SpeakeasyBase {
    /**
     * A permission that you grant to the role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. Note that the update action replaces all previously assigned permissions with those defined in the update action. To remove a permission, do not include it in the subsequent update action. The values for this parameter depend on the role's `type`.
     */
    permission: string[];
}
export declare class UpdateServiceRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to update the Role resource in.
     */
    chatServiceSid: string;
    requestBody?: UpdateServiceRoleUpdateServiceRoleRequest;
    /**
     * The SID of the Role resource to update.
     */
    sid: string;
}
export declare class UpdateServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
