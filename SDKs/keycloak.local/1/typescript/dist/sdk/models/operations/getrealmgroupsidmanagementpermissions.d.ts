import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsIdManagementPermissionsRequest extends SpeakeasyBase {
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmGroupsIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
