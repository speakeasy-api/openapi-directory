import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesByIdRoleIdCompositesClientsClientRequest extends SpeakeasyBase {
    client: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdCompositesClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
