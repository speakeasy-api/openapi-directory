import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteRealmGroupsIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
    requestBody: shared.RoleRepresentation[];
    client: string;
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmGroupsIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
