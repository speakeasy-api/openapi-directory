import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesRoleNameRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * role’s name (not id!)
     */
    roleName: string;
}
export declare class GetRealmRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentation?: shared.RoleRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
