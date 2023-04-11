import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersUserEmailPermissionsPermissionNameRequest extends SpeakeasyBase {
    /**
     * permission name
     */
    permissionName: shared.PermissionNameEnum;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class PostUsersUserEmailPermissionsPermissionNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * permission successfully added to user
     */
    userResponse?: shared.UserResponse;
}
