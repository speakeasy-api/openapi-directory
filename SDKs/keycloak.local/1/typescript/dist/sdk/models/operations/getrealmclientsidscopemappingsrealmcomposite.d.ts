import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdScopeMappingsRealmCompositeRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsRealmCompositeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
