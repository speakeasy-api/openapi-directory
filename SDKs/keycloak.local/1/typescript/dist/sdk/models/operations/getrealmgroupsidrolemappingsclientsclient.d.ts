import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    client: string;
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
