import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
