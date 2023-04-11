import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdRolesRoleNameUsersRequest extends SpeakeasyBase {
    first?: number;
    /**
     * id of client (not client-id)
     */
    id: string;
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    userRepresentations?: shared.UserRepresentation[];
}
