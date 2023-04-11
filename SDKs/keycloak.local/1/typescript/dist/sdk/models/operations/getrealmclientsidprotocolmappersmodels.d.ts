import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdProtocolMappersModelsRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
