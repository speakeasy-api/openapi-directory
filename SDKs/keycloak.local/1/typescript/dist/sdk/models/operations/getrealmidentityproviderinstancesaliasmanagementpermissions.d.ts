import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest extends SpeakeasyBase {
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
