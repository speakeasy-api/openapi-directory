import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdProtocolMappersProtocolProtocolRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    protocol: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdProtocolMappersProtocolProtocolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
