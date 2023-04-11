import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
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
export declare class DeleteRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
