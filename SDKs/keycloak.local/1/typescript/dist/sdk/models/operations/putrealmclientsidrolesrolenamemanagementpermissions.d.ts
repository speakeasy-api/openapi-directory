import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmClientsIdRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    managementPermissionReference: shared.ManagementPermissionReference;
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    roleName: string;
}
export declare class PutRealmClientsIdRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
