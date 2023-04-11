import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdRolesRequest extends SpeakeasyBase {
    briefRepresentation?: boolean;
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
    search?: string;
}
export declare class GetRealmClientsIdRolesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
