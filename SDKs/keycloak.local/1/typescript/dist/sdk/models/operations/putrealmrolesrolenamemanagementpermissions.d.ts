import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    managementPermissionReference: shared.ManagementPermissionReference;
    /**
     * realm name (not id!)
     */
    realm: string;
    roleName: string;
}
export declare class PutRealmRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
