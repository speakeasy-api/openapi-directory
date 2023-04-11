import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
