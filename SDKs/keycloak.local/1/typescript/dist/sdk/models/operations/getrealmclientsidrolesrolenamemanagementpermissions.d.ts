import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
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
export declare class GetRealmClientsIdRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
