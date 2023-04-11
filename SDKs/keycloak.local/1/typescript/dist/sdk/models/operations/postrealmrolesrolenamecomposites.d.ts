import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmRolesRoleNameCompositesRequest extends SpeakeasyBase {
    requestBody: shared.RoleRepresentation[];
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * role’s name (not id!)
     */
    roleName: string;
}
export declare class PostRealmRolesRoleNameCompositesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
