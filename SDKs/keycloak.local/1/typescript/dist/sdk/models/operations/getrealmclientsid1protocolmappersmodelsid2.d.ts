import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
    id1: string;
    id2: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    protocolMapperRepresentation?: shared.ProtocolMapperRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
