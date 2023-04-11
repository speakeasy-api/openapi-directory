import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceRoleCreateServiceRoleRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
     */
    friendlyName: string;
    /**
     * A permission that you grant to the new role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role's `type`.
     */
    permission: string[];
    type: shared.ServiceRoleEnumRoleTypeEnum;
}
export declare class CreateServiceRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to create the Role resource under.
     */
    chatServiceSid: string;
    requestBody?: CreateServiceRoleCreateServiceRoleRequest;
}
export declare class CreateServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ServiceServiceRole?: shared.ConversationsV1ServiceServiceRole;
}
