import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmUsersManagementPermissionsRequest extends SpeakeasyBase {
    managementPermissionReference: shared.ManagementPermissionReference;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmUsersManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
