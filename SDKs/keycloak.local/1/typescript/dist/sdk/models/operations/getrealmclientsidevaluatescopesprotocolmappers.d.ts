import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdEvaluateScopesProtocolMappersRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    scope?: string;
}
export declare class GetRealmClientsIdEvaluateScopesProtocolMappersResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations?: shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
