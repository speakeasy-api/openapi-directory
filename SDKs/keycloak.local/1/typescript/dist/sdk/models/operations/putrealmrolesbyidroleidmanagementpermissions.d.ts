import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
    managementPermissionReference: shared.ManagementPermissionReference;
    /**
     * realm name (not id!)
     */
    realm: string;
    roleId: string;
}
export declare class PutRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
