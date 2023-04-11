import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRealmClientsIdOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
    clientScopeId: string;
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmClientsIdOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
