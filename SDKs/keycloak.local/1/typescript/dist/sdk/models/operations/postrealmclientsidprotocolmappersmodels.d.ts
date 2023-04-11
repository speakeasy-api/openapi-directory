import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdProtocolMappersModelsRequest extends SpeakeasyBase {
    protocolMapperRepresentation: shared.ProtocolMapperRepresentation;
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
