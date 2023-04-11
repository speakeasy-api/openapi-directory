import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientScopesIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    requestBody: shared.RoleRepresentation[];
    client: string;
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientScopesIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
