import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * role’s name (not id!)
     */
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentation?: shared.RoleRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
